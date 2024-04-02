export interface IStudent {
  firstName: string;
  lastName: string;
  birthYear: number;
  grades: IStudentGrade[];
  visits: IStudentVisit[];
  fullName: string;
  age: number;
  getPerformanceRating: () => number;
}

export interface IStudentGrade {
  workName: string;
  mark: number;
}

export interface IStudentVisit {
  lesson: string;
  present: boolean;
}
