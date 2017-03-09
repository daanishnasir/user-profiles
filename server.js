const express = require('express');
const bodyParser =require('body-parser');
const port = 3000;

const app = express();
const path = require('path');             //?? Ask Mentor

const cors = require('cors');         //avoids us having to write custom middlware for headers
const session = require('express-session');
const config = require('./config.js');
const userCtrl = require('./controllers/userCtrl.js');
const profileCtrl = require('./controllers/profileCtrl.js');
app.use(bodyParser.json());


var corsOptions = {
  origin: 'http://localhost:3000'
};

//middleware
app.use(cors(corsOptions))
app.use(session({secret:config.sessionSecret}));


//routes

app.post('/api/login', userCtrl.login);

app.get('/api/findFriend', profileCtrl.findFriend);



app.use(express.static(__dirname + '/public'));












app.listen(port, function(){
  console.log(`you listening on port ${port} dawg`);
});
