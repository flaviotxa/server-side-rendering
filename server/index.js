const express = require('express');

const app = new express();

app.get('/', (_req, res) => {
  res.send(
    `<h1>REACT IS EXCELLENT</h1>`
  )
});

app.listen(3333);
console.log('Server is listening.')