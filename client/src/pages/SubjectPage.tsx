import { useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Breadcrumbs
} from '@mui/material';
import { Link } from '@tanstack/react-router';

import { fetchSubjectById } from '../mocks/api';
import { SubjectSidebar } from '../components/Sidebar/SubjectSidebar';
import { GradeCard } from '../components/GradeCard';

export function SubjectPage() {
  const { subjectId } = useParams({ from: '/materias/$subjectId' });

  const { data: subject, isLoading, isError } = useQuery({
    queryKey: ['subject', subjectId],
    queryFn: () => fetchSubjectById(subjectId),
    enabled: !!subjectId,
  });

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !subject) {
    return <Typography sx={{ p: 4 }} color="error">Matéria não encontrada.</Typography>;
  }

  return (
    <Box sx={{ p: 5 }}>
      <Grid container spacing={2}>
        <Grid size={3}>
          <SubjectSidebar subject={subject} />
        </Grid>
        <Grid size={8}>

          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              Home
            </Link>
            <Typography color="text.primary">{subject.name}</Typography>
          </Breadcrumbs>

          <Typography variant="h3" component="h1" gutterBottom>
            {subject.name}
          </Typography>

          <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
            {subject.longDescription}
          </Typography>

          <Grid container spacing={3} sx={{ mt: 2 }}>
            {subject.grades.map(grade => (
              <Grid size={4}>
                <GradeCard subject={subject} grade={grade} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}