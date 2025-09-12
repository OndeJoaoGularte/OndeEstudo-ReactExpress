import { allSubjects } from './index';
import type { Subject, Grade, Unit } from '../types/entities';

export const fetchAllSubjects = (): Promise<Subject[]> => Promise.resolve(allSubjects);

export const fetchSubjectById = (id: string | undefined): Promise<Subject | undefined> => {
  if (!id) return Promise.resolve(undefined);
  return Promise.resolve(allSubjects.find(s => s.id === id));
};

export const fetchGradeById = (subjectId: string, gradeId: string): Promise<{ subject: Subject; grade: Grade } | undefined> => {
  const subject = allSubjects.find(s => s.id === subjectId);
  if (!subject) return Promise.resolve(undefined);

  const grade = subject.grades.find(g => g.id === gradeId);
  if (!grade) return Promise.resolve(undefined);

  return Promise.resolve({ subject, grade });
};

export const fetchUnitById = (subjectId: string, gradeId: string, unitId: string): Promise<{ subject: Subject; grade: Grade; unit: Unit } | undefined> => {
  const subject = allSubjects.find(s => s.id === subjectId);
  if (!subject) return Promise.resolve(undefined);

  const grade = subject.grades.find(g => g.id === gradeId);
  if (!grade) return Promise.resolve(undefined);

  const unit = grade.units.find(u => u.id === unitId);
  if (!unit) return Promise.resolve(undefined);

  return Promise.resolve({ subject, grade, unit });
};