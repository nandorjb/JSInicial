var express = require('express');
var app = express();

// Utilizar o EJS
app.set('view engine', 'ejs');

// tratando a página Principal
app.get('/', function(req,res){
    //res.send("Ola Mundo");
    res.render("home/home");
});

app.get('/Treinamento', function(req,res){
    //res.send("Ola Mundo");
    res.render("treinamento/estrutura_controle");
});
app.get('/Fer', function(req,res){
    //res.send("Ola Mundo");
    res.render("Fernando/Fernando");
});
//Servidor fica ouvindo a porta 3000 para responder
app.listen(3030, function(){
    console.log("Servidor Ativo");
});
