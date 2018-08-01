const Task = require('./models/task');
const Cfuel = require('./controladores/Cfuel')
const Cpreg = require('./controladores/Cpregunta')
const Cenc = require('./controladores/Cencuesta')
const Cencpreg = require('./controladores/Cencpreg')
const enc = require('./models/encuesta')

module.exports = (app, passport) => {

	// index routes
	app.get('/', (req, res) => {
		res.render('index');
	});

	//login view
	app.get('/login', (req, res) => {
		res.render('login', {
			message: req.flash('loginMessage')
		});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect: '/profile',
		failureRedirect: '/login',
		failureFlash: true
	}));

	// signup view
	app.get('/signup', (req, res) => {
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true // allow flash messages
	}));

	//profile view
	/*app.get('/profile', isLoggedIn, (req, res) => {
		res.render('profile', {
			user: req.user,
			tasks: req.tasks
		});
	});*/

app.post('/agregar', async (req, res) => {
	const task = new Task(req.body);
	await task.save();	
	res.redirect('/profile');

});
	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/profile', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('profile', {
		user: req.user,
		tasks
	});
});


	app.get('/ejemplo',(req,res) =>{
    res.render('ejemplo1')
  })
  	app.get('/otro', (req,res)=>{
    res.render('ejemplo2')
  })
  
  	app.get('/grafica', (req,res)=>{
    res.render('chart')
  })

  	app.get('/graficadb', (req,res)=>{
    res.render('chartdb')
  })

  //fuel methods
	app.get("/fuel",Cfuel.getfuel)
	app.get('/encuestas',async (req, res) => {
		const encuestas = await enc.find();
		console.log(encuestas);
		res.render('encuestas', {
				encuestas
		});
	})
	app.get('/getencuestas',Cenc.getencuestas)
	app.get("/preg",Cpreg.insertpregunta)
	app.get("/newe",Cenc.insertarencuesta)
	app.get("/ep",Cencpreg.insertarencpreg)
  app.get("/ct", (req,res)=>{
	
	const task = new Task({
		pregunta: "Proceso de Check-in | Check-in process",
	tipo: 1,
	opc1: "aceptable",
	opc: "aceptable",
	opc2: "aceptable",
	opc3: "malo",
	opc4: "malo",
	opc5: "malo",
	opc6: "deficiente",
	cant1: 10,
	cant2: 20,
	cant3: 30,
	cant4: 20,
	cant5: 20,
	cant6: 10
    })
    
    task.save((err) =>{
        if (err) return res.status(500).send({message: 'error al crear fuel:'+err})
    
       return res.status(200).send(task)
    })
	})
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
};


