var mysql = require('mysql');
var express = require("express");
var app = express();

const port = process.env.PORT | 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const mysqlConnection = mysql.createConnection({
    host: "162.241.2.40",
    user: "tuprodu5_aluvir",
    password: "b00kMoneylist",
    database: "tuprodu5_aluvir_system",
    port: 3306
  });

mysqlConnection.connect(function (err) {
    if (err) {
      console.error(err);
      return;
    } else {
      console.log('db is connected');
    }
});

app.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM as_vw_consulta_usuarios_activos', (err, rows, fields) => {
      if(!err) {
        res.json(rows);
      } else {
        console.log(err);
      }
    });  
});

app.listen (port, ()=> {
    console.log('El servidor esta corriendo en el puerto: ' + port)
})