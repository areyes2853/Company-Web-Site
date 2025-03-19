// server.js
const { name } = require('ejs');
const express = require('express');
const app = express();

app.use(express.static('public'));
const pastwork = [{Work1: "Flower contest", Role: "Judge"}, {Work2: "Halloween show", Role: "Pumpkin suppliers"}, {Work3: "Gas station flower sellers", Role: "We needed money"}];
const staff = [{EmployeeName: "John", Role: "Manager"}, {EmployeeName: "Sally", Role: "Flower keeper"}, {EmployeeName: "Mike", Role: "Monkey"}];
const externalLinks = [{LinkTitle: "https://harry'sflowersandotherstuff.com"}];
let message = `We started in 1900 with just a little seed, and now we service all the plant companies in the world!`

//starter page
app.get('/',(req,res)=>{
    res.render('home.ejs',{welcome:message,staff:staff,pastwork:pastwork});});

app.get('/:itemId',(req, res)=>{
  const itemId = req.params.itemId
  res.render('nav.ejs',{item:pastwork[itemId]})
})
    

app.get('/server', (req, res) => {
  console.log('server funning');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

