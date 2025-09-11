import { useQuery } from '@tanstack/react-query';
import { fetchAllSubjects } from '../../mocks/api';
import type { Subject } from '../../types/entities';
import { Button, Toolbar, CircularProgress, Typography } from '@mui/material';
import { Link } from '@tanstack/react-router';

export function Navbar() {
  const { data: subjects, isLoading, isError } = useQuery({
    queryKey: ['subjects'],
    queryFn: fetchAllSubjects,
  });

  return (
    <Toolbar
      variant="dense"
      component="nav"
      sx={{
        justifyContent: 'center',
        overflowX: 'auto',
        bgcolor: 'background.paper',
        color: 'text.primary',
        borderTop: '1px solid',
        borderColor: 'divider',
        '&::-webkit-scrollbar': { height: 4 },
        '&::-webkit-scrollbar-thumb': { backgroundColor: 'rgba(0,0,0,.1)', borderRadius: 2 }
      }}
    >
      {isLoading && <CircularProgress size={24} />}
      {isError && <Typography variant="body2" color="error">Erro</Typography>}
      {subjects?.map((subject: Subject) => (
        <Link 
          key={subject.id}
          to="/materias/$subjectId"
          params={{ subjectId: subject.id }}
          style={{ textDecoration: 'none', color: 'inherit' }}>
          <Button
            key={subject.id}
            color="inherit"
            sx={{ my: 1, mx: 1, flexShrink: 0, textTransform: 'none' }}
          >
            {subject.name}
          </Button>
        </Link>
      ))}
    </Toolbar>
  );
}