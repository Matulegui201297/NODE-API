const mongoose = require ('mongoose')

const productSchema = mongoose.Schema(
    {
        nombre:{
            type : String,
            required: [true, "Por favor ingresar un producto"]
        },
        cantidad:{
            type: Number,
            required: true,
            default: 0
        },
        precio: {
            type: Number,
            required: true
        },
        imagen: {
            type: String,
            required: false
        }
    },
    {
        timestamp: true
    }
)

const Producto = mongoose.model('Producto', productSchema);

module.exports = Producto;