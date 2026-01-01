const { createServer } = require('http');
const fs = require('fs');


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
      let output = `Number of students: ${student_no}\n`;
      for (const [key, value] of Object.entries(fields)) {
        output += `Number of students in ${key}: ${value.length}. List: ${fields[key].join(', ')}\n`;
      }
      resolve(output)
    });
  });
}

const hostname = '127.0.0.1'
const port = 1245

const app = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello ALX');
    response.end();
  }

  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2].toString()).then((output) => {
      const outString = output.slice(0, -1);
      response.end(outString);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
