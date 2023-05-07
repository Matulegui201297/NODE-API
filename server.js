// Para conectar - tipear npm run dev

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Producto = require('./models/productModels');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:false}));


// RUTAS

app.listen(port, () => {
    console.log(`La conexion funciona bien en el puerto ${port}`)
  });


app.get('/', (req, res) => {
  res.send('Hola Mundo!')
});

app.get('/blog', (req, res) => {
    res.send('Hola Blog, mi nombre es Mateo!')
  });
  
// BUSCAR PRODUCTOS 


app.get('/productos', async (req,res) => {
    try {
        const productos = await Producto.find({});
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// BUSCAR PRODUCTOS POR ID

app.get('/productos/:id', async (req,res) => {
    try {
        const {id} = req.params;
        const producto = await Producto.findById(id);
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// CREAR PRODUCTOS 

app.post('/producto', async (req, res) => {
   try {
    const producto = await Producto.create(req.body)
    res.status(200).json(producto);
   } 
   catch (error) {
    console.log(error.message)
    res.status(500).json({message: error.message})
   }
})


// ACTUALIZAR PRODUCTOS

app.put('/productos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const producto = await Producto.findByIdAndUpdate(id, req.body);


        // si no se encuentra el producto en la  base de datos
        
        if (!producto) {
            return res.status(404).json({message: 'Producto no encontrado'}) 
        }
        const productoActualizado = await Producto.findById(id);
        res.status(200).json({productoActualizado});
    
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

// BORRAR PRODUCTOS

app.delete('/productos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const producto = await Producto.findByIdAndDelete(id);

        // si no se encuentra el producto en la  base de datos
        
        if (!producto) {
            return res.status(404).json({message: 'Producto no encontrado'}) 
        }
        res.status(200).json({producto});

    } catch (error) {
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
