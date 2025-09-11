import * as React from 'react';
import { useParams } from '@tanstack/react-router';
import { useQuery } from '@tanstack/react-query';
import {
  Box,
  Typography,
  Grid,
  CircularProgress,
  Breadcrumbs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from '@tanstack/react-router';

import { fetchSubjectById } from '../mocks/api';
import { Sidebar } from '../components/Sidebar';

export function SubjectPage() {
  const { subjectId } = useParams({ from: '/materias/$subjectId' });

  const [expandedGrade, setExpandedGrade] = React.useState<string | false>(false);
  const [expandedUnit, setExpandedUnit] = React.useState<string | false>(false);

  const handleGradeChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedGrade(isExpanded ? panel : false);
  };
  const handleUnitChange = (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpandedUnit(isExpanded ? panel : false);
  };

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
          <Sidebar subject={subject} />
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

          <Box sx={{ mt: 4 }}>
            {subject.grades.map(grade => (
              <Accordion key={grade.id} expanded={expandedGrade === grade.id} onChange={handleGradeChange(grade.id)}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Link
                    to="/materias/$subjectId/$gradeId"
                    params={{ subjectId: subject.id, gradeId: grade.id }}
                    onClick={(e) => e.stopPropagation()}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography sx={{ '&:hover': { opacity: 0.7 } }}>⬜️</Typography>
                  </Link>
                  <Typography>{grade.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  {grade.units.map(unit => (
                    <Accordion key={unit.id} expanded={expandedUnit === unit.id} onChange={handleUnitChange(unit.id)} sx={{ boxShadow: 'none', '&:before': { display: 'none' } }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Link
                          to="/materias/$subjectId/$gradeId/$unitId"
                          params={{ subjectId: subject.id, gradeId: grade.id, unitId: unit.id }}
                          onClick={(e) => e.stopPropagation()}
                          style={{ textDecoration: 'none' }}
                        >
                          <Typography sx={{ '&:hover': { opacity: 0.7 } }}>
                            ⬜️
                          </Typography>
                        </Link>
                        <Typography>{unit.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <List>
                          {unit.lessons.length > 0 ? unit.lessons.map(lesson => (
                            <ListItem key={lesson.id} disablePadding>
                              <ListItemText primary={lesson.title} />
                            </ListItem>
                          )) : (
                            <Typography variant="body2" color="text.secondary">Nenhuma aula disponível nesta unidade.</Typography>
                          )}
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}