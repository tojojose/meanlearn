'use strict'

var  express =  require('express');
var  bodyParser = require('body-parser');

var Post =  require('./models/posts');



var app = express();
app.use(bodyParser.json());


app.get('/', function(req,res){
  
   res.sendfile('layouts/posts.html');

 }
);

var postsApi = require('./controllers/api/posts'); 

app.use(postsApi);


app.use(express.static(__dirname + '/assets'));



app.listen(3000,function(){
   console.log('Server start listening on : 3000')

})


