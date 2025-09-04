import type { Subject } from '../types/entities';

export const biology: Subject = {
  id: 'biology',
  name: 'Biologia',
  description: 'Explore os segredos da vida, desde as menores células até os complexos ecossistemas que formam nosso planeta.',
  grades: [
    {
      id: 'bio-em-1',
      level: 1,
      stage: 'Ensino Médio',
      name: '1º Ano do Ensino Médio',
      units: [
        {
          id: 'bio-em-1-un-1',
          title: 'Citologia: O Estudo da Célula',
          description: 'A base da vida. Nesta unidade, vamos explorar os componentes e funções das células, as unidades fundamentais de todos os seres vivos.',
          lessons: [
            {
              id: 'bio-em-1-un-1-les-1',
              title: 'Introdução à Célula',
              textContent: {
                main: 'Toda a vida como conhecemos é feita de células. Elas são as menores unidades estruturais e funcionais dos organismos. Existem dois tipos principais: procariontes e eucariontes...',
                historicalContext: 'A descoberta da célula foi possível graças à invenção do microscópio no século XVII por Robert Hooke, que observou células de cortiça.',
              },
              videos: [
                { id: 'vid-1', title: 'Tipos de Células: Procariontes vs Eucariontes', url: 'https://www.youtube.com/watch?v=exemplo', durationInMinutes: 12 },
              ],
              studyResources: [
                { id: 'res-1', title: 'Artigo sobre a Teoria Celular', type: 'LINK', url: 'https://brasilescola.uol.com.br/biologia/teoria-celular.htm' },
                { id: 'res-2', title: 'Livro: Biologia de Campbell', type: 'BOOK', source: 'Capítulo 4, 11ª Edição' },
              ],
              quiz: {
                id: 'quiz-1',
                title: 'Teste seus conhecimentos sobre Células',
                questions: [
                  {
                    id: 'q-1',
                    questionText: 'Qual organela é responsável pela respiração celular?',
                    options: ['Ribossomo', 'Mitocôndria', 'Lisossomo', 'Núcleo'],
                    correctOptionIndex: 1,
                    solutionGuide: 'A respiração celular ocorre nas mitocôndrias, que geram ATP para a célula. Ribossomos sintetizam proteínas, lisossomos fazem a digestão e o núcleo armazena o DNA.',
                  },
                ],
              },
            },
            {
              id: 'bio-em-1-un-1-les-2',
              title: 'Membrana Plasmática',
              // ... conteúdo simplificado para a segunda aula
              textContent: { main: 'A membrana plasmática controla o que entra e sai da célula...' },
              videos: [],
              studyResources: [],
              quiz: { id: 'quiz-2', title: 'Teste sobre Membrana', questions: [] },
            },
          ],
        },
        {
          id: 'bio-em-1-un-2',
          title: 'Bioquímica: A Química da Vida',
          description: 'Estudo das moléculas essenciais para a vida, como água, carboidratos, lipídios e proteínas.',
          lessons: [], // Aulas a serem adicionadas
        },
      ],
    },
  ],
};