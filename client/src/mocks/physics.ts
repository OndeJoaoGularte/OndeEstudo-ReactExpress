import type { Subject } from '../types/entities';

export const physics: Subject = {
  id: 'physics',
  name: 'Física',
  description: 'Decifre as leis que regem o universo, do movimento dos planetas à energia dos átomos, e compreenda o funcionamento do cosmos.',
  grades: [
    {
      id: 'mat-em-1',
      level: 1,
      stage: 'Ensino Médio',
      name: '1º Ano do Ensino Médio',
      units: [
        {
          id: 'mat-em-1-un-1',
          title: 'Funções',
          description: 'Introdução ao conceito de funções, um dos pilares da matemática.',
          lessons: [
            {
              id: 'mat-em-1-un-1-les-1',
              title: 'O que é uma Função?',
              textContent: { main: 'Uma função é uma relação entre dois conjuntos...' },
              videos: [],
              studyResources: [],
              quiz: { id: 'quiz-mat-1', title: 'Teste sobre Funções', questions: [] },
            },
          ],
        },
      ],
    },
  ],
};