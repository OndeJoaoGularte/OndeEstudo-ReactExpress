import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, CardContent, CardActions, Collapse, IconButton, Typography, Button, Box, Divider } from '@mui/material';
import type { IconButtonProps } from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@tanstack/react-router';

import type { Subject } from '../types/entities';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

interface SubjectCardProps {
  subject: Subject;
}

export function SubjectCard({ subject }: SubjectCardProps) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const totalUnits = subject.grades.reduce((acc, grade) => acc + grade.units.length, 0);

  return (
    <Card>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1.5 }}>
          <Link to="/materias/$subjectId" params={{ subjectId: subject.id }} style={{ textDecoration: 'none', flexGrow: 1 }}>
            <Typography variant="h5" component="div" color="primary" sx={{ '&:hover': { textDecoration: 'underline' } }}>
              {subject.name}
            </Typography>
          </Link>

          <Typography color="text.secondary" sx={{ flexShrink: 0 }}>
            {subject.grades.length} {subject.grades.length === 1 ? 'Série' : 'Séries'}, {totalUnits} {totalUnits === 1 ? 'Unidade' : 'Unidades'}
          </Typography>
        </Box>

        <Typography variant="body2">
          {subject.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="caption" color="text.secondary">Ver séries</Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0 }}>
          <Divider sx={{ mb: 2 }} />
          <Typography paragraph variant="h6">Séries Disponíveis:</Typography>
          <Box>
            {subject.grades.map(grade => (
              <Button key={grade.id} variant="outlined" size="small" sx={{ mr: 1, mb: 1 }}>
                {grade.name}
              </Button>
            ))}
          </Box>
        </CardContent>
      </Collapse>
    </Card>
  );
}