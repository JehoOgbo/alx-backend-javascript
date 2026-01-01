const fs = require('fs')
/**
 * readDatabase - read a datafile asynchronously & find no. of students
 * @params {String} path the path to the datafile
 * @author Urom Jehoshaphat Ogbonnia <https://github.com/JehoOgbo>
 */
module.exports = function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (error, data) => {
      if (error) {
        reject(new Error('Cannot load the database'));
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
      resolve(fields);
    });
  });
}
