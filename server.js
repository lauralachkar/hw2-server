const express = require('express');
const res = require("express/lib/response");
const bd = require('body-parser');
const path = require("path");

const app = express();

app.use(bd.urlencoded({extended: false}));

app.use(express.static(__dirname, {index: '/login.html'}));

app.post('/signup', function (req, res) {
    const fullname = req.body.fullname;
    res.sendFile(__dirname + '/signup.html', {fullname: fullname});
});

// app.get('/login.html', (req, res,) => {
//       res.sendFile(__dirname + '/signup.html');
//  });


//app.get('/',(req,res)=>{
//res.send('welcome to my website');
//});


//app.get('about',(req, res,)=>{
//res.send('welcome about');
//});

// app.get('/signup', (req, res,) => {
//     res.sendFile(__dirname + '/login/signup.html');
// });
//
// app.get('/signup', (req, res,) => {
//     res.send(req.body.username);
// });

app.listen('3000', () => console.log('server listen to port 3000'))

