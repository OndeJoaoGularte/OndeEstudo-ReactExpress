import { Box, Typography } from '@mui/material';
import { useParams } from '@tanstack/react-router';

export function SubjectPage() {
  const { subjectId } = useParams({ from: '/materias/$subjectId' });
  
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Matéria
      </Typography>
      <Typography variant="body1">
        Conteúdo para a matéria com ID: {subjectId}
      </Typography>
    </Box>
  );
}