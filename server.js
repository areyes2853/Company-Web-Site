// server.js
const { name } = require('ejs');
const express = require('express');
const app = express();

app.use(express.static('public'));

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

