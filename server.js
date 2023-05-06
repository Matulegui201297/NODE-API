const express = require('express');
const app = express();
const mongoose = require('mongoose');

const port = 3000;


// ROUTES


app.get('/', (req, res) => {
  res.send('Hola Mundo!')
});

app.get('/blog', (req, res) => {
    res.send('Hola Blog, mi nombre es Mateo!')
  });
  

app.listen(port, () => {
  console.log(`La conexion funciona bien en el puerto ${port}`)
});


mongoose
.connect('mongodb+srv://Matulegui:Epiphonelogitech@cluster0.utjvw.mongodb.net/NODE-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Contecdo a base de datos MONGO')
}).catch((error) => {
    console.log(error)
})
