import * as React from 'react';
import { Box, List, ListItemButton, ListItemText, Collapse, Typography, Divider } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import type { Subject } from '../types/entities';

interface SidebarProps {
  subject: Subject;
}

export function Sidebar({ subject }: SidebarProps) {
  const [openGradeId, setOpenGradeId] = React.useState<string | null>(null);

  const handleClick = (gradeId: string) => {
    setOpenGradeId(openGradeId === gradeId ? null : gradeId);
  };

  return (
    <Box sx={{
      position: 'fixed',
      top: '120px',
      height: 'calc(100vh - 122px)',
      overflowY: 'auto',
      borderRight: 1,
      borderColor: 'divider',
      maxWidth: '269px',
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
      <Typography variant="h5" component="h2" sx={{ p: 2 }}>
        {subject.name}
      </Typography>
      <Divider />
      <List component="nav">
        {subject.grades.map((grade) => (
          <React.Fragment key={grade.id}>
            <ListItemButton onClick={() => handleClick(grade.id)}>
              <ListItemText primary={grade.name} />
              {openGradeId === grade.id ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            
            <Collapse in={openGradeId === grade.id} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {grade.units.map((unit) => (
                  <ListItemButton key={unit.id} sx={{ pl: 4 }}>
                    <ListItemText primary={unit.title} />
                  </ListItemButton>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
}