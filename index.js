const express = require("express")

const dotenv = require("dotenv")

//configuration dotenv
dotenv.config();

// create app
const app = express();

// Puerto de conexion
//const port = process.env.PORT || 8000;
const port = 8000;
// Definimos la primera ruta de la aplicacion
app.get("/", (req, res) => {
    res.send("Este es el primer mensaje del servidor en el directorio raiz");
})


//Ejecutamos la app
app.listen (port, () => {
    console.log(`SERVIDOR CORRIENDO EN http://localhost:${port}`);
})






