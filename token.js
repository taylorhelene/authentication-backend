const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));


const passwords=[]
app.post('/signup',(req,res)=>{
  passwords.push(req.body);
  res.send(
    req.body
  )
})

var responseMessage="";
var correctCombination={};
var user='';

app.use('/login', (req, res) => {
  user=req.body
  correctCombination=passwords.find(password=>{
    return (password.username==req.body.username && password.password==req.body.password)
  })
  
  if(correctCombination!=undefined){
    responseMessage=req.body
  }else responseMessage="null"
  
  res.send(
     responseMessage 
  );
});
app.use('/',(req, res)=>{
  res.send(
    correctCombination
  )
})

app.listen(8000, () => console.log('API is running on http://localhost:8000/login'));