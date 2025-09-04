import { allSubjects } from './index';
import type { Subject } from '../types/entities';

export const fetchAllSubjects = (): Promise<Subject[]> => {
  return Promise.resolve(allSubjects);
};