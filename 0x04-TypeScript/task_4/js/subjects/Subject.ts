namespace Subjects {
  export class Subject {
    teacher: Subjects.Teacher;

    set setTeacher(value: Subjects.Teacher) {
      this.teacher = value;
    }
  }
}
