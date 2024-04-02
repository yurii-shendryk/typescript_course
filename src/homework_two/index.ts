/* eslint-disable @typescript-eslint/member-ordering */
import { IArea } from '../homework_one/interfaces/area.interface';
import { GroupStatusEnum, IGroup } from '../homework_one/interfaces/group.interface';
import { ILecturer } from '../homework_one/interfaces/lecturer.interface';
import { ILevel } from '../homework_one/interfaces/level.interface';
import { ISchool } from '../homework_one/interfaces/school.interface';
import { IStudent, IStudentGrade, IStudentVisit } from '../homework_one/interfaces/student.interface';
import { TGroupContructor, TNewGroup } from '../homework_one/types/group.type';
import { TLecturerContructor, TNewLecturer } from '../homework_one/types/lecturer.type';
import { TNewLevel } from '../homework_one/types/level.type';
import { TNewStudent } from '../homework_one/types/student.type';

class School implements ISchool {
  // implement 'add area', 'remove area', 'add lecturer', and 'remove lecturer' methods

  _areas: IArea[] = [];
  _lecturers: ILecturer[] = []; // Name, surname, position, company, experience, courses, contacts

  get areas(): IArea[] {
    return this._areas;
  }

  get lecturers(): ILecturer[] {
    return this._lecturers;
  }

  addArea(areaName: string): void {
    const area = new Area(areaName);
    this._areas.push(area);
  }

  removeArea(areaName: string): void {
    this._areas = this._areas.filter(area => area.name !== areaName);
  }

  addLecturer(newLecturer: TNewLecturer): void {
    const lecturer: ILecturer = new Lecturer(newLecturer);
    this._lecturers.push(lecturer);
  }

  removeLecturer(lecturerFullName: string): void {
    this._lecturers = this._lecturers.filter(lecturer => lecturer.fullName !== lecturerFullName);
  }
}

class Lecturer implements ILecturer {
  _name: string;
  _surname: string;
  _position: string;
  _company: string;
  _experience: number;
  _fullName: string;
  _courses: string[] = [];
  _contacts: string[] = [];

  constructor({ name, position, surname, company, experience }: TLecturerContructor) {
    this._name = name;
    this._surname = surname;
    this._position = position;
    this._company = company;
    this._experience = experience;
    this._fullName = `${name} ${surname}`;
  }

  get name(): string {
    return this._name;
  }

  get surname(): string {
    return this._surname;
  }

  get position(): string {
    return this._position;
  }

  get company(): string {
    return this._company;
  }

  set company(newCompany: string) {
    this._company = newCompany;
  }

  get experience(): number {
    return this._experience;
  }

  set experience(newExperience: number) {
    this.experience += newExperience;
  }

  get fullName(): string {
    return this._fullName;
  }

  get contacts(): string[] {
    return this._contacts;
  }

  get courses(): string[] {
    return this._courses;
  }

  addContact(newContact: string): void {
    this._contacts.push(newContact);
  }

  addCourse(newCourse: string): void {
    this._courses.push(newCourse);
  }
}

class Area {
  // implement getters for fields and 'add/remove level' methods
  _levels: ILevel[] = [];
  _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get levels(): ILevel[] {
    return this._levels;
  }

  get name(): string {
    return this._name;
  }

  addLevel(newLevel: TNewLevel): void {
    const level: ILevel = new Level(newLevel);
    this._levels.push(level);
  }

  removeLevel(levelName: string): void {
    this._levels = this._levels.filter(level => level.name !== levelName);
  }
}

class Level implements ILevel {
  // implement getters for fields and 'add/remove group' methods

  _groups: IGroup[] = [];
  _name: string;
  _description: string;

  constructor({ name, description }: TNewLevel) {
    this._name = name;
    this._description = description;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }

  get groups(): IGroup[] {
    return this._groups;
  }

  addGroup(newGroup: TNewGroup): void {
    const group: IGroup = new Group(newGroup);
    this._groups.push(group);
  }

  removeGroup(groupName: string): void {
    this._groups = this._groups.filter(group => group.name !== groupName);
  }
}

class Group implements IGroup {
  // implement getters for fields and 'add/remove student' and 'set status' methods

  _area: string;
  _status: GroupStatusEnum;
  _students: IStudent[] = []; // Modify the array so that it has a valid toSorted method*
  _name: string;
  _directionName: string;
  _levelName: string;

  constructor({ area, directionName, levelName, status }: TGroupContructor) {
    this._directionName = directionName;
    this._levelName = levelName;
    this._area = area;
    this._status = status;
    this._name = `${directionName}-${area}-${levelName}`;
  }

  get area(): string {
    return this._area;
  }

  get status(): GroupStatusEnum {
    return this._status;
  }

  get directionName(): string {
    return this._directionName;
  }

  get levelName(): string {
    return this._levelName;
  }

  set status(newStatus: GroupStatusEnum) {
    this._status = newStatus;
  }

  get students(): IStudent[] {
    return this._students;
  }

  get name(): string {
    return this._name;
  }

  showPerformance(): IStudent[] {
    const sortedStudents: IStudent[] = this._students.toSorted(
      (a, b) => b.getPerformanceRating() - a.getPerformanceRating()
    );
    return sortedStudents;
  }

  addStudent(newStudent: TNewStudent): void {
    const student: IStudent = new Student(newStudent);
    this._students.push(student);
  }

  removeStudent({ fullName, birthYear }: IStudent): void {
    this._students = this._students.filter(
      (student: IStudent) => fullName !== student.fullName && birthYear !== student.birthYear
    );
  }
}

class Student implements IStudent {
  // implement 'set grade' and 'set visit' methods

  _firstName: string;
  _lastName: string;
  _birthYear: number;

  _grades: IStudentGrade[] = []; // workName: mark
  _visits: IStudentVisit[] = []; // lesson: present

  constructor({ birthYear, firstName, lastName }: TNewStudent) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._birthYear = birthYear;
  }

  get fullName(): string {
    return `${this._lastName} ${this._firstName}`;
  }

  set fullName(value: string) {
    [this._lastName, this._firstName] = value.split(' ');
  }

  get age(): number {
    return new Date().getFullYear() - this._birthYear;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get birthYear(): number {
    return this._birthYear;
  }

  get grades(): IStudentGrade[] {
    return this._grades;
  }

  set grade(newGrade: IStudentGrade) {
    this._grades.push(newGrade);
  }

  get visits(): IStudentVisit[] {
    return this._visits;
  }

  set visit(newVisit: IStudentVisit) {
    this._visits.push(newVisit);
  }

  getPerformanceRating(): number {
    const gradeValues: IStudentGrade[] = Object.values(this._grades);

    if (!gradeValues.length) return 0;

    const averageGrade: number =
      gradeValues.reduce((sum: number, grade: IStudentGrade) => sum + grade.mark, 0) / gradeValues.length;
    const attendancePercentage: number =
      (this._visits.filter(visit => visit.present).length / this._visits.length) * 100;

    return (averageGrade + attendancePercentage) / 2;
  }
}
