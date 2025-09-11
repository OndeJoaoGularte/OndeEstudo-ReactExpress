import { useParams } from '@tanstack/react-router';
import { Box, Typography } from '@mui/material';

export function GradePage() {
  const { gradeId } = useParams({ from: '/materias/$subjectId/$gradeId' });
  
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3">Página da Série</Typography>
      <Typography>ID da Série: {gradeId}</Typography>
    </Box>
  );
}