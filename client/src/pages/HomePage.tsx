import { useQuery } from '@tanstack/react-query';
import { fetchAllSubjects } from '../mocks/api';
import { Box, Typography, CircularProgress, Stack } from '@mui/material';

import { SubjectCard } from '../components/SubjectCard';

export function HomePage() {
  const { data: subjects, isLoading, isError } = useQuery({
    queryKey: ['subjects'],
    queryFn: fetchAllSubjects,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Typography color="error">Ocorreu um erro ao buscar as matérias.</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom textAlign={'center'}>
        Matérias
      </Typography>
      
      <Stack
        spacing={3}
        sx={{
          width: { md: '100%' }, 
          maxWidth: '1200px',
          mx: 'auto',
        }}
      >
        {subjects?.map((subject) => (
          <SubjectCard key={subject.id} subject={subject} />
        ))}
      </Stack>
    </Box>
  );
}