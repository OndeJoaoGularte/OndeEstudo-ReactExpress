import { Link, useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress, Grid, Breadcrumbs } from '@mui/material';
import { fetchGradeById } from '../mocks/api';
import { GradeSidebar } from '../components/Sidebar/GradeSidebar';


export function GradePage() {
  const { subjectId, gradeId } = useParams({ from: '/materias/$subjectId/$gradeId' });
  const { data, isLoading, isError } = useQuery({
    queryKey: ['grade', subjectId, gradeId],
    queryFn: () => fetchGradeById(subjectId, gradeId),
    enabled: !!subjectId && !!gradeId,
  });

  if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      );
    }
  if (isError || !data) { return <Typography sx={{ p: 4 }}>Série não encontrada.</Typography>; }

  const { subject, grade } = data;
  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={2}>
        <Grid size={3}>
          <GradeSidebar subject={subject} grade={grade} />
        </Grid>
        <Grid size={8}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
            <Link key={subject.id} to="/materias/$subjectId" params={{ subjectId: subject.id }} style={{ textDecoration: 'none', color: 'inherit' }}>
              {subject.name}
            </Link>
            <Typography color="text.primary">{grade.name}</Typography>
          </Breadcrumbs>
          <Typography variant="h3" component="h1" gutterBottom>
                      {grade.name}
                    </Typography>
          <Typography>Selecione uma unidade na barra lateral para continuar.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}