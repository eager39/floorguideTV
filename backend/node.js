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
   var sql = 'SELECT *,(select count(DISTINCT(floor))  FROM company) as st FROM floorguidetv.company order by floor,ord asc;';
}else{
   var sql = 'SELECT id,name,active,type,ord,duration FROM items WHERE active=1 and display=? ORDER BY type asc';
}
   
   var data;
 //  var sql = 'SELECT id,name,active,type,ord,duration FROM items WHERE active=1 and display=? ORDER BY type asc';
  var result=await connection.query(sql,[id])
      if(result){
         res.json(result)
      }
   


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






app.listen(3000, () => console.log('Example app listening on port 3000!'))