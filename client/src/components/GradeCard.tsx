import { Card, CardContent, Typography, Box, Button, Stack } from '@mui/material';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'; // Ícone de medalha
import { Link } from '@tanstack/react-router';
import type { Subject, Grade } from '../types/entities';

interface GradeCardProps {
  subject: Subject;
  grade: Grade;
}

export function GradeCard({ subject, grade }: GradeCardProps) {
  return (
    <Card sx={{ textAlign: 'center', p: 2 }}>
      <CardContent>
        <Link key={subject.id} to="/materias/$subjectId/$gradeId" params={{ subjectId: subject.id, gradeId: grade.id }} style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
        <Typography variant="h6" component="h4" color="secondary" sx={{ '&:hover': { textDecoration: 'underline' }}} gutterBottom>
          {grade.name}
        </Typography></Link>
        
        <Box sx={{ my: 2 }}>
          <EmojiEventsIcon sx={{ fontSize: 80 }} color="warning" />
        </Box>
      </CardContent>
      <Stack spacing={2} direction="column">
        <Button variant="contained" fullWidth>
          Visualizar Conteúdo
        </Button>
        <Button variant="contained" fullWidth>
          Realizar Teste
        </Button>
      </Stack>
    </Card>
  );
}