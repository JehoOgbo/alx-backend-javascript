const express = require('express');
const app = express()
const port = 1245

app.get('/', (request, response) => {
  response.send('Hello ALX');
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = app;
