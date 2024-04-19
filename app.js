//importacion de modulos necesarios
const express = require('express');
const http = require('http');
const path = require('path');

const port =4200;
//carga diferidanfvhc 

const app = express();

//configuracion de archivos static
app.use(express.static(__dirname+'/static'));

//Instancia del server
const server = http.createServer(app);


//configuracion de motor de plantillas
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'./views'));

//configuracion de recuperacion de datos y envio
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.get('/',(req,res)=>{
res.render('index');
});
					


server.listen(port,()=> {

console.log(`Servidor corriendo en el puerto ${port}`);

})