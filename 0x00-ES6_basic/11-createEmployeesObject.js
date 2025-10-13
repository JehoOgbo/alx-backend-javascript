export default function createEmployeesObject(departmentName, employees) {
  const Employee = {
    [departmentName]: employees,
  }
  return Employee;
}
