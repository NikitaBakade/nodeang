var bodyParser = require('body-parser')
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');

mongoose.connect('mongodb://localhost:27017/NodeAngularCrud', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const Schema = mongoose.Schema;

const userSchema = new Schema({
  title: String,
  description: String,
  // Status: {
  //       type: [ { type: String, enum: ["Open", "In-Progress", "Completed"] } ],
  //       },
  open: String,
  inprogress: String,
  completed: String,
  DateTimeStamp : { type: Date, default: (new Date()).getTime() }  
});

const userModel = mongoose.model('users',userSchema);

const app = express();

app.use(bodyParser.json())
app.use(cors());

app.get("/fetch_data", (req,res)=>{
    userModel.find({},function(err,docs){
        if(!err){
            res.send(docs);
        }
    })
});




app.listen(5000);