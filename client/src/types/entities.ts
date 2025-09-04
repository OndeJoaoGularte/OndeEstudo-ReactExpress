export interface StudyResource {
  id: string;
  title: string;
  type: 'LINK' | 'BOOK' | 'ARTICLE';
  url?: string;
  source?: string;
}

export interface Video {
  id: string;
  title: string;
  url: string;
  durationInMinutes: number;
}

export interface QuizQuestion {
  id: string;
  questionText: string;
  options: string[];
  correctOptionIndex: number;
  solutionGuide: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}





//
export interface Lesson {
  id: string;
  title: string;
  textContent: {
    main: string;
    historicalContext?: string;
  };
  videos: Video[];
  studyResources: StudyResource[];
  quiz: Quiz;
}



//

export interface Unit {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}



//

export interface Grade {
  id: string;
  level: number;
  stage: 'Ensino Médio' | 'Ensino Fundamental 1' | 'Ensino Fundamental 2';
  name: string; 
  units: Unit[];
}


//

export interface Subject {
  id: string;
  name: string;
  description: string;
  grades: Grade[];
}




export interface LessonFeedback {
  id: string;
  lessonId: string;
  rating: 1 | 2 | 3 | 4 | 5;
  comment?: string;
  createdAt: Date;
}