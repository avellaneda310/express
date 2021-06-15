const http = require("http");


const server = http.createServer(function (request, response) {
    response.writeHead(200, {"content-type": "text/html"});
    response.write(`
    <html>
    <body>
    <h1>Este es el server funcionando</h1>
    </body>
    </html>

    
    `);
    response.end();
});
server.listen(3000);
console.log("Servidor web iniciado");