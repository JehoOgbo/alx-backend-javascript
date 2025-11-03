export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return 'I can work from Home';
  }

  getCoffeeBreak() {
    return 'I am going for coffee';
  }

  workDirectorTasks() {
    return 'I will do an executive task';
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return 'I do not work from Home';
  }

  getCoffeeBreak() {
    return 'I am going for coffee';
  }

  workTeacherTasks() {
    return 'I will teach a class';
  }
}

export function createEmployee(salary: (number | string)): (Director | Teacher) {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

export function isDirector(employee: (Director | Teacher)): boolean {
  if (employee instanceof Director) {
    return true;
  }
  return false;
}

export function executework(employee: (Director | Teacher)): string {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  }
  return (employee as Teacher).workTeacherTasks();
}

export type Subjects = "Math" | "History";

export function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return 'Teaching Math';
  }
  return 'Teaching History';
}
