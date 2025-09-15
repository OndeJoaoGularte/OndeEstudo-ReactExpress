import React from 'react';
import { Card, CardContent, Typography, Box, Button, Stack, styled, Divider, List, ListItem, ListItemText, ListItemIcon, ListItemButton } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Ícone de medalha
import { Link } from '@tanstack/react-router';
import type { Subject, Grade } from '../types/entities';
import { ProgressIcon } from './ProgressIcon';

const FlipCardContainer = styled(Box)({
  backgroundColor: 'transparent',
  width: '100%',
  minHeight: '320px',
  perspective: '1000px',
});

const FlipCardInner = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'isFlipped',
})<{ isFlipped?: boolean }>(({ isFlipped }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  transition: 'transform 0.8s',
  transformStyle: 'preserve-3d',
  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
}));

const FlipCardFace = styled(Box)({
  position: 'absolute',
  width: '100%',
  height: '100%',
  backfaceVisibility: 'hidden',
});

const FlipCardBack = styled(FlipCardFace)({
  transform: 'rotateY(180deg)',
});

interface GradeCardProps {
  subject: Subject;
  grade: Grade;
}

export function GradeCard({ subject, grade }: GradeCardProps) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <FlipCardContainer>
      <FlipCardInner isFlipped={isFlipped}>
        <FlipCardFace>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <CardContent>
              <Link key={subject.id} to="/materias/$subjectId/$gradeId" params={{ subjectId: subject.id, gradeId: grade.id }} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                <Typography variant="h6" component="h4" color="secondary" sx={{ '&:hover': { textDecoration: 'underline' } }} gutterBottom>
                  {grade.name}
                </Typography></Link>

              <Box sx={{ my: 2 }}>
                <EmojiEventsIcon sx={{ fontSize: 80 }} color="warning" />
              </Box>
            </CardContent>
            <Stack spacing={2} direction="column">
              <Button variant="contained" fullWidth onClick={handleFlip}>
                Visualizar Conteúdo
              </Button>
              <Button variant="contained" fullWidth>
                Realizar Teste
              </Button>
            </Stack>
          </Card>
        </FlipCardFace>
        <FlipCardBack>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <CardContent>
              <Link key={subject.id} to="/materias/$subjectId/$gradeId" params={{ subjectId: subject.id, gradeId: grade.id }} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                <Typography variant="h6" component="h4" color="secondary" sx={{ '&:hover': { textDecoration: 'underline' } }} gutterBottom>
                  {grade.name}
                </Typography></Link>
              <Divider sx={{ my: 1 }} />
              <List dense sx={{  
                maxHeight: '155px',
                minHeight: '155px', 
                overflowY: 'auto', 
                '&::-webkit-scrollbar': {
                  width: '3px',
                },
                '&::-webkit-scrollbar-track': {
                  backgroundColor: 'background.paper',
                },
                '&::-webkit-scrollbar-thumb': {
                  backgroundColor: theme => theme.palette.secondary.main,
                  borderRadius: '4px',
                },
                '&::-webkit-scrollbar-thumb:hover': {
                  backgroundColor: theme => theme.palette.secondary.light,
                }, 
              }}>
                {grade.units.map((unit, index) => {
                  const progressStates = [100, 75, 50, 25, 0];
                  const unitProgress = progressStates[index % progressStates.length];
                  
                  return (
                  <Link
                      key={unit.id}
                      to="/materias/$subjectId/$gradeId/$unitId"
                      params={{
                        subjectId: subject.id,
                        gradeId: grade.id,
                        unitId: unit.id,
                      }}
                      style={{ textDecoration: 'none', color: 'inherit' }}>
                  <ListItemButton>
                    <ListItem key={unit.id} disablePadding>
                      <ListItemIcon sx={{ minWidth: '40px' }}>
                        <ProgressIcon progress={unitProgress} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={`${index + 1}. ${unit.title}`}
                        secondary={`${unit.lessons.length} aulas`}
                      />
                    </ListItem>
                  </ListItemButton>
                  </Link>
                  )
                })}
              </List>
            </CardContent>
            <Button variant="contained" fullWidth onClick={handleFlip}>
              Ocultar Conteúdo
            </Button>
          </Card>
        </FlipCardBack>
      </FlipCardInner>
    </FlipCardContainer>
  );
}