import type { Subject } from '../types/entities';

export const arts: Subject = {
  id: 'arts',
  name: 'Artes',
  shortDescription: 'Explore a história da expressão humana, da pintura à música, e desperte sua própria criatividade e sensibilidade.',
  longDescription: 'Explore a história da expressão humana, da pintura à música, e desperte sua própria criatividade e sensibilidade com o curso de Artes da OndeEstudo? baseado na BNCC!',
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