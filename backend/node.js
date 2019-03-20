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
connection.query = util.promisify(connection.query)



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




app.get('/data',async function(req, res) {
   
   var id=req.query.id
   console.log(req.query)
if(id=="all"){
   var sql = 'SELECT * FROM company order by floor,ord asc;';
   var sql2="SELECT DISTINCT(floor) FROM company order by floor asc "
}else{
   var sql = 'SELECT * FROM company WHERE floor=? order by floor,ord asc;';
   var sql2="SELECT DISTINCT(floor) FROM company WHERE floor=? order by floor asc"
}
   
   var data;
 //  var sql = 'SELECT id,name,active,type,ord,duration FROM items WHERE active=1 and display=? ORDER BY type asc';
   
 
     res.json(await Promise.all([connection.query(sql,[id]),connection.query(sql2,[id] )])) 
});
app.get('/dataedit',async function(req, res) {
   var sql = 'SELECT * FROM company order by floor';
 var result=await connection.query(sql)
 res.json(result)
});
app.post("/addCompany",async function(request,response){
   if(request.body.name==""){
      response.status(400).json(false)
      return false

   }
   var name=request.body.name
   var floor=request.body.floor
   var sql="INSERT INTO company (name,floor) VALUES (?,?)"
   var result=await connection.query(sql,[name,floor])
   if(result){
      response.json(result)
   }

})
app.post("/editCompany",async function(request,response){
   if(request.body.name==""){
      response.status(400).json(false)
      return false

   }
   console.log(request.body)
   var name=request.body.name
   var floor=request.body.floor
   var id=request.body.id
   var sql="UPDATE company set name=?,floor=? WHERE id=?"
   var result=await connection.query(sql,[name,floor,id])
   if(result){
      response.json(result)
   }

})
app.post("/deleteCompany",async function(req,res){
   var sql="DELETE FROM company WHERE id=?"
   var result=await connection.query(sql,[req.body.id])
   res.json(result)
})






app.listen(3000, () => console.log('Example app listening on port 3000!'))