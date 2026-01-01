const fs = require('fs')
/**
 * countStudents - read a datafile asynchronously & find no. of students
 * @params {String} path the path to the datafile
 * @author Urom Jehoshaphat Ogbonnia <https://github.com/JehoOgbo>
 */
function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        throw Error('Cannot load the database');
      }
      const sdata_lines = data.toString().split('\n');
      // remove the header line from the buffer
      sdata_lines.shift();
      const data_lines = sdata_lines.filter(Boolean)
      const fields = {};
      for (const line of data_lines) {
        const field_names = line.toString().split(',');
        // make an object that holds the name by field
        if (Object.prototype.hasOwnProperty.call(fields, field_names[3])) {
          // if the object already contains the field, append the new name
          fields[field_names[3]].push(field_names[0]);
        } else {
          // else add the new field with the new name
          fields[field_names[3]] = [field_names[0]];
        }
      }

      student_no = data_lines.length;
      console.log(`Number of students: ${student_no}`);
      for (const [key, value] of Object.entries(fields)) {
        console.log(`Number of students in ${key}: ${value.length}. List: ${fields[key].join(', ')}`)
      }
      resolve(data)
    });
  });
}

module.exports = countStudents;
