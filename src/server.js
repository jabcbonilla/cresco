const express = require('express');
const app = express();
const http = require('http')
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors')

//fuego cruzado para permitir access control total desde cualquier servidor
app.use(cors());
app.options('*', cors());

//const { url } = require('./config/database.js');
const { grafico,port } = require('./config/database.js');



mongoose.connect(grafico, {
	useMongoClient: true
});

require('./config/passport')(passport);

// settings
app.set('port', process.env.PORT || port);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
// required for passport
app.use(session({
	secret: 'faztwebtutorialexample',
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// routes
require('./app/routes.js')(app, passport);

// static files
app.use(express.static(path.join()));

// start the server

var server = http.createServer(app).listen(port, function() {  
    console.log('server listening on port https://localhost:'+ port);
  });
