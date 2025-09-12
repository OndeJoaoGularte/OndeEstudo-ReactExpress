import { Box, List, ListItemButton, ListItemText, Typography, Divider } from '@mui/material';
import { Link } from '@tanstack/react-router';
import type { Subject, Grade, Unit } from '../../types/entities';

interface UnitSidebarProps {
  subject: Subject;
  grade: Grade;
  unit: Unit;
}

export function UnitSidebar({ subject, grade, unit }: UnitSidebarProps) {
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
      <Box sx={{ p: 2 }}>
        <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
          {subject.name}
        </Typography>
        <Typography color="text.secondary">{grade.name}</Typography>
        <Typography color="text.secondary" variant="body2">{unit.title}</Typography>
      </Box>
      <Divider />
      <List component="nav">
        {unit.lessons.map((lesson) => (
          <Link
            key={lesson.id}
            to="/"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <ListItemButton>
              <ListItemText primary={lesson.title} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Box>
  );
}