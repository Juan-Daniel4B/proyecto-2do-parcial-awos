require('./config/config');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

/*app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})*/

app.get('/', function (req, res) {
  res.send('<h1>Bienvenido a mi servidor REST</h1>');
});

app.get('/usuario', function (req, res) {
    res.json({
      ok: 200,
      mensaje: 'Usuarios cosultados con exito'
    });
  });

app.put('/usuario/:id/:nombre', function(req, res){
  let id = req.params.id;
  let nombre = req.params.nombre;

  res.json({
    ok: 200,
    mensaje: 'Usuario actualizado',
    id: id,
    nombre: nombre
  });
});

app.delete('/usuario/:id', function(req, res){
  let id = req.params.id;


  res.json({
    ok: 200,
    mensaje: 'Usuario elimiado',
    id: id,
  });
});
   
app.post('/usuario', function(req,res){
  let nombre = req.body.nombre;
  let body = require.body;
if(nombre === undefined){
  res.status(400).json({
    ok: 400, 
    mensaje: 'Favor de mandar el valor del nombre'
  });
}else{

  res.json({
    ok: 200,
    mensaje: 'Usuario insertado con exito',
    nombre: nombre,
    body: body
  });
}
});
 
app.listen(process.env.PORT, () =>{
    console.log('El servidor esta en linea en el puerto', process.env.PORT);
});