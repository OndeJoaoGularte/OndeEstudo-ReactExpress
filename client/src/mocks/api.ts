import { allSubjects } from './index';
import type { Subject } from '../types/entities';

export const fetchAllSubjects = (): Promise<Subject[]> => {
  return Promise.resolve(allSubjects);
};

export const fetchSubjectById = (id: string | undefined): Promise<Subject | undefined> => {
  if (!id) {
    return Promise.resolve(undefined);
  }
  const subject = allSubjects.find(s => s.id === id);
  return Promise.resolve(subject);
};