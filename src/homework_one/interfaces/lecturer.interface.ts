export interface ILecturer {
  name: string;
  surname: string;
  fullName: string;
  position: string;
  company: string;
  experience: number;
  courses: string[];
  contacts: string[];
  addContact: (newContract: string) => void;
  addCourse: (newCourse: string) => void;
}
