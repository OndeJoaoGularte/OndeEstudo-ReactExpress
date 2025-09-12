import { Link, useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import { Box, Typography, CircularProgress, Grid, Breadcrumbs } from '@mui/material';
import { fetchUnitById } from '../mocks/api';
import { UnitSidebar } from '../components/Sidebar/UnitSidebar';

export function UnitPage() {
  const { subjectId, gradeId, unitId } = useParams({ from: '/materias/$subjectId/$gradeId/$unitId' });
  const { data, isLoading, isError } = useQuery({
    queryKey: ['unit', subjectId, gradeId, unitId],
    queryFn: () => fetchUnitById(subjectId, gradeId, unitId),
    enabled: !!subjectId && !!gradeId && !!unitId,
  });

  if (isLoading) {
      return (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      );
    }
  if (isError || !data) { return <Typography sx={{ p: 4 }}>Unidade não encontrada.</Typography>; }

  const { subject, grade, unit } = data;
  return (
  <Box sx={{ p: 5 }}>
      <Grid container spacing={2}>
        <Grid size={3}>
          <UnitSidebar subject={subject} grade={grade} unit={unit} />
        </Grid>
        <Grid size={8}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
            <Link key={subject.id} to="/materias/$subjectId" params={{ subjectId: subject.id }} style={{ textDecoration: 'none', color: 'inherit' }}>
              {subject.name}
            </Link>
            <Link key={grade.id} to="/materias/$subjectId/$gradeId" params={{ subjectId: subject.id, gradeId: grade.id }} style={{ textDecoration: 'none', color: 'inherit' }}>
              {grade.name}
            </Link>
            <Typography color="text.primary">{unit.title}</Typography>
          </Breadcrumbs>
          <Typography variant="h3" component="h1" gutterBottom>
                     {unit.title}
                    </Typography>
          <Typography>Selecione uma unidade na barra lateral para continuar.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}