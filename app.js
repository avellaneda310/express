
console.log("Es una app con node");

const mysql = require("mysql2");
const http = require("http");

const mysqlConfig = require("./config/config");//con esto conecto con la carpeta donde esta el enlase
console.log(mysqlConfig);

const coneccion = mysql.createConnection(mysqlConfig);

coneccion.connect(function (error){
    if (error){
        console.log("Se produjo un error en la coneccion" + error.stack);
        return;
    }
    console.log("La coneccion a la Base de Datos esta genial!!");
});
coneccion.query("select * from empleados", function (error, resultados){
   if (error){
        console.log("Se produjo un error en la coneccion" + error.stack);
        return;
    }
    resultados.forEach(resultado => {
        console.log(resultado)
    });




});

const http = require("http");
const { request, response } = require("express");

const server = http.createServer((request, response) =>{
    response.writeHead(200, {"content-type": "text/html"});
    response.write(`
    <html>
    <head>
    <title>Mi primer pagina con node</title>
    </head>
    <Body>Hola Mundo</Body>
    </html>
    
    `)
    response.end();
});
server.listen(2000);
console.log("Servidor web iniciado");
//conection.end();





