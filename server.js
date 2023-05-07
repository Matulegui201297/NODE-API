// Para conectar - tipear npm run dev

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Producto = require('./models/productModels');

const port = 3000;

app.use(express.json());


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


app.get('/product', async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



app.post('/product', async (req, res) => {
   try {
    const product = await Producto.create(req.body)
    res.status(200).json(product);
   } 
   catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
   }
})


mongoose
.connect('mongodb+srv://Matulegui:Epiphonelogitech@cluster0.utjvw.mongodb.net/NODE-API?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectado a base de datos MONGO')
}).catch((error) => {
    console.log(error)
})
