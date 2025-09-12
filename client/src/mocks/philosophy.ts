import type { Subject } from '../types/entities';

export const philosophy: Subject = {
  id: 'philosophy',
  name: 'Filosofia',
  shortDescription: 'Desafie suas certezas e explore as grandes questões da existência, da ética e do conhecimento, afiando seu pensamento crítico.',
  longDescription: 'Desafie suas certezas e explore as grandes questões da existência, da ética e do conhecimento, afiando seu pensamento crítico com o curso de Filosofia da OndeEstudo? baseado na BNCC!',
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