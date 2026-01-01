const readDatabase = require('../utils');



class StudentsController {
  static getAllStudents(request, response) {
    readDatabase(process.argv[2].toString()).then((students) => {
      const output = []
      output.push('This is the list of our students');
      const keys = Object.keys(students);
      keys.sort();
      for (const key of keys) {
        const val = students[key]
        output.push(`Number of students in ${key}: ${val.length}. List ${val.join(', ')}`);
      }
      // for (const [key, value] of Object.entries(students)) {
        // output.push(`Number of students in ${key}: ${value.length}. List ${students[key].join(', ')}\n`)
      // }
      response.status(200).send(output.join('\n'));
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }

  static getAllStudentsByMajor(request, response) {
    const input_field = request.params.major;
    readDatabase(process.argv[2].toString()).then((students) => {
      if (!(input_field in students)) {
        response.status(500).send('Major parameter must be CS or SWE');
      } else {
        response.status(200).send(`List ${students[input_field].join(', ')}`);
      }
    }).catch(() => {
      response.status(500).send('Cannot load the database');
    });
  }
}

module.exports = StudentsController;
