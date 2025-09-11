import { useQuery } from '@tanstack/react-query';
import { fetchAllSubjects } from '../mocks/api';
import { Box, Typography, CircularProgress, Stack } from '@mui/material';
import { SubjectCard } from '../components/SubjectCard';
import ondeEstudoLogo from '../assets/ondeestudo.png'; 

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
       <Typography
        variant="h5"
        component="h1"
        textAlign="center"
        color="text.secondary"
      >
        Você já se perguntou:
      </Typography>
      <Box
        component="img"
        src={ondeEstudoLogo}
        alt="Onde Estudo Logo"
        sx={{
          display: 'block',
          mx: 'auto',
          width: { xs: '80%', sm: '60%', md: '40%' },
          maxWidth: '1000px',
          height: 'auto',
          mb: 4,
        }}
      />
      
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