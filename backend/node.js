const express = require('express')
var bodyParser = require("body-parser")
var cors = require('cors')
var mysql = require('mysql')
const app = express()
var conf = require('./config')
conf = new conf()
var util = require('util')


var connection = mysql.createConnection({
   host: 'localhost',
   user: conf.DBuser,
   password: conf.DBpass,
   database: conf.database,
   multipleStatements: true
})



connection.connect(function(err) {
   if (err) {
      console.log("Napaka v povezavi do baze");
   } else {
      console.log('You are now connected...')
   }

})
app.use(cors());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(bodyParser.json({
   limit: '50mb'
}));




app.get('/data', function(req, res) {

   var id=req.query.id
if(id=="all"){
   var sql = 'SELECT id,name,active,type,ord,duration FROM items WHERE active=1  ORDER BY type asc';
}else{
   var sql = 'SELECT id,name,active,type,ord,duration FROM items WHERE active=1 and display=? ORDER BY type asc';
}
   var slike = [];
   var data;
 //  var sql = 'SELECT id,name,active,type,ord,duration FROM items WHERE active=1 and display=? ORDER BY type asc';
   connection.query(sql,[id], function(err, results) {
      if (err) throw err
      data = results;
   })


});






app.listen(3000, () => console.log('Example app listening on port 3000!'))