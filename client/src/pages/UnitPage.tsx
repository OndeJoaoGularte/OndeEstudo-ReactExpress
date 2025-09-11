import { useParams } from '@tanstack/react-router';
import { Box, Typography } from '@mui/material';

export function UnitPage() {
  const { unitId } = useParams({ from: '/materias/$subjectId/$gradeId/$unitId' });

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3">Página da Unidade</Typography>
      <Typography>ID da Unidade: {unitId}</Typography>
    </Box>
  );
}