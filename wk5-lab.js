let express = require('express');
let app = express();
let db = [];
app.engine("html", require('ejs').renderFile);
app.set("viewengine");

let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use(express.static('images'));
app.use(express.static('css'));
let viewsPath = __dirname+'/views/';

/* 
          GET Requests
  */
app.get('/', function(req,res){    
    res.sendFile(viewsPath+"index.html");
});

app.get('/addNewtask', function(req,res){    
    res.sendFile(viewsPath+"addNew.html");
});
/* 
          POST Requests
  */
 app.post('/newTask', function(req,res){
    db.push(req.body);
    res.sendFile(viewsPath+"addNew.html");
});

app.get('/listAll', function(req,res){    
    res.render(viewsPath + "listAllTasks.html",{
        tasks: db
    });


});


app.listen(8080);
console.log("Listening on port 8080");