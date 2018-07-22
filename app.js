// Instancia a função e executa
//var express = require('express')();

var express = require('express');
var app = express();
//Servidor fica ouvindo a porta 3000 para responder
app.listen(3030, function(){
    console.log("Servidor Ativo");
});