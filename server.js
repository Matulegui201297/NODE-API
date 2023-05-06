const express = require('express');
const app = express();
const port = 3000;


// ROUTES


app.get('/', (req, res) => {
  res.send('Hola Mundo!')
});

app.listen(port, () => {
  console.log(`La conexion funciona bien en el puerto ${port}`)
});
