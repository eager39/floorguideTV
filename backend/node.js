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
   multipleStatements: true,
 
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
   var sql = 'SELECT * FROM company order by floor,room desc;';
   var sql2="SELECT DISTINCT(floor) FROM company order by floor desc "
}else{
   var sql = 'SELECT * FROM company WHERE floor=? order by floor,room asc;';
   var sql2="SELECT DISTINCT(room) FROM company WHERE floor=? order by floor,room asc"
}
   
   var data;
 //  var sql = 'SELECT id,name,active,type,ord,duration FROM items WHERE active=1 and display=? ORDER BY type asc';
   var result1=connection.query(sql,[id])
   var result2=connection.query(sql2,[id])
 
     res.json(await Promise.all([result1,result2])) 
});
app.get('/dataedit',async function(req, res) {
   var sql = 'SELECT * FROM company order by room';
   var sql2="SELECT DISTINCT(floor) FROM company order by floor asc "
   res.json(await Promise.all([connection.query(sql),connection.query(sql2 )])) 
 
});
app.post("/addCompany",async function(request,response){
   if(request.body.name==""){
      response.status(400).json(false)
      return false

   }
   
   var name=request.body.name
   console.log(name)
   var floor=request.body.floor
   var room=request.body.room
   var sql="INSERT INTO company (name,floor,room) VALUES (?,?,?)"
   var result=await connection.query(sql,[name,floor,room])
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
   var room=request.body.room
   var sql="UPDATE company set name=?,floor=?,room=? WHERE id=?"
   var result=await connection.query(sql,[name,floor,room,id])
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