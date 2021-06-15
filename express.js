const { json } = require("express");
const express = require ("express");
const mysql = require("mysql2");
const mysqlConfig = require("./config/config");

const app = express();

//app.get("/", function(req, res){
//    const Gente = ["Berni", "Nico", "Dani", "Vale",];
//    const variablejson = JSON.stringify(Gente);
//    console.log(variablejson);
//    const objetojavascript = JSON.parse(variablejson);
//    console.log(objetojavascript);
//    res.send(variablejson)
//});

//todo esto se resuelve con res.jason y no tenemos que convertir
let Gente = ["Berni", "Nico", "Dani", "Vale",];

const connection = mysql.createConnection(mysqlConfig);//conesto nos creamos el objeto para conectamos a sql con los datos dela carpeta config

app.use(express.json());

connection.connect((error) =>{   // con esta funcion nos conectamos
    if (error){
        console.error(error);
        return;
    }
    console.log("Conectado a la base de datos");
});



app.get("/", function(req, res){
    const filtroNombre = req.query.nombre;
    
    let genteFiltrada;

    if (filtroNombre){
        genteFiltrada = Gente.filter (g => {
            return g === filtroNombre;
        });
    } else {
        genteFiltrada = Gente;
    }
        
    res.json(genteFiltrada);//aca esta el res.jason!!!!!
    });

    
    app.get("./empleados", (req, res) =>{
        connection.query("select * from empleados", (error, resultado) => {
            if (error){
                console.error(error);
                return;
            }
            res.json(resultado);
        }
        

        );
    });



app.post ("/", function (req, res){
    const body = req.body;
    Gente.push(body.nombre);
    res.json({massage: "Persona ingresada exitosamente", cantidadpersonas: Gente.length});
});


app.put ("/", function (req, res){
    res.send("Esto es por el put");
});

//app.get ("/contacto", function (req, res){
//    res.send("Contacto");
//});

app.delete ("/", function(req, res){
    const genteAborrar = req.query.nombre;
    if(!genteAborrar){
        return res.json({error: true, massage: "Ingrese un nombre a borrar"});
    }
    gente = gente.filter(g =>{
        return g == !genteAborrar
    });

    res.json({massage: "Gente borrada exitosamente", cantidadpersonas: gente.length})

});

app.listen(4000, () =>{
    console.log("Aplicacion de express iniciada");
} );







