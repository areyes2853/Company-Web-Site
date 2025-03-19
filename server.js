// server.js
const { name } = require('ejs');
const express = require('express');
const app = express();

app.use(express.static('public'));
const pastwork = [{Work1: "Flower contest", Role: "Judge", Work2: "Halloween show", Role: "Pumpkin suppliers", Work3: "Gas station flower sellers", Role: "We needed money"}];
const staff = [{EmployeeName: "John", Role: "Manager", EmployeeName: "Sally", Role: "Flower keeper", EmployeeName: "Mike", Role: "Monkey"}];
const externalLinks = [{LinkTitle: "https://harry'sflowersandotherstuff.com"}];


//starter page
app.get('/home',(req,res)=>{
    res.render('home.ejs');
})

app.get('/server', (req, res) => {
  console.log('server funning');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

