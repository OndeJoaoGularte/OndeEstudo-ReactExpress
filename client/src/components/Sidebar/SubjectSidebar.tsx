import { Box, List, ListItemButton, ListItemText, Typography, Divider } from '@mui/material';
import { Link } from '@tanstack/react-router';
import type { Subject } from '../../types/entities';

interface SubjectSidebarProps {
  subject: Subject;
}

export function SubjectSidebar({ subject }: SubjectSidebarProps) {
  return (
    <Box sx={{
          position: 'fixed',
          top: '120px',
          height: 'calc(100vh - 122px)',
          overflowY: 'auto',
          borderRight: 1,
          borderColor: 'divider',
          maxWidth: '245px',
          '&::-webkit-scrollbar': {
            width: '3px',
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'background.paper',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme => theme.palette.secondary.main,
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: theme => theme.palette.secondary.light,
          },
        }}>
      <Typography variant="h5" component="h2" sx={{ p: 2, fontWeight: 600 }}>
        {subject.name}
      </Typography>
      <Divider />
      <List component="nav">
        {subject.grades.map((grade) => (
          <Link
            key={grade.id}
            to="/materias/$subjectId/$gradeId"
            params={{ subjectId: subject.id, gradeId: grade.id }}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemButton>
              <ListItemText primary={grade.name} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
}