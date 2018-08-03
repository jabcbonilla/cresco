const Task = require('./models/task');
const Cfuel = require('./controladores/Cfuel')
const Cpreg = require('./controladores/Cpregunta')
const Cenc = require('./controladores/Cencuesta')
const Cusu = require('./controladores/Cusuario')

const Cencpreg = require('./controladores/Cencpreg')
const enc = require('./models/encuesta')
// http://localhost:8000/api/encuestas/obtener
// cresco.js, 
module.exports = (app, passport) => {

	// rutas 
	app.get('/', (req, res) => {
		res.render('index');
	});
	


	// vista login
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

	//  vista signup 
	app.get('/signup', (req, res) => {
		//res.status(200).json("signup");
		res.render('signup', {
			message: req.flash('signupMessage')
		});
	});

	app.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/profile',
		failureRedirect: '/signup',
		failureFlash: true // permite mensajes flash
	}));

	

	// vista profile
	/*app.get('/profile', isLoggedIn, (req, res) => {
		res.render('profile', {
			user: req.user,
			tasks: req.tasks
		});
	});*/

	// agregar encuesta
app.post('/agregar', async (req, res) => {
	const task = new Task(req.body);
	await task.save();	
	res.redirect('/profile');

});

app.get('/eliminar/:id', async (req, res) => {
	const { id } = req.params;
	await Task.remove({_id: id});	
	res.redirect('/profile');

});
	// logout
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});
// perfil
	app.get('/profile', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('profile', {
		user: req.user,
		tasks
	});
});
// vista encuestas
app.get('/encuestas', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('encuestas', {
		user: req.user,
		tasks
	});
});

app.get('/gusuario', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('gusuario', {
		user: req.user,
		tasks
	});
});

// vista reportes
app.get('/reportes', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('reportes', {
		user: req.user,
		tasks
	});
});

app.get('/nosotros', (req, res) => {
	res.render('nosotros');
})

app.get('/proyectos',(req, res) => {
	res.render('proyectos');
})

app.get('/servicios', (req, res) => {
	res.render('servicios');
})

app.get('/contacto', (req, res) => {
	res.render('contacto');
})

app.get('/usu', (req, res) => {
	res.render('gusuario');
})


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
		res.render('encuestas', {
				encuestas
		});
	})


app.get('/getencuestas',Cenc.getencuestas)
app.get('/getusuarios',Cusu.getUsuarios)
//app.get('/encuestas/:id',async (req, res) => {
//	const {id} = req.params
//	const tas = await enc.find({_id: id});
//	var task = tas[0]
//	res.render('encuesta', {
//		task
//});
//})
app.get("/encuestas/:id",(req,res)=>{
	const {id} = req.params
	Cenc.getencuesta(req,res,id)
	console.log(id)
})

app.get("/encuesta",Cenc.getencuesta)
app.get("/preg",Cpreg.insertpregunta)
app.get("/newe",Cenc.insertarencuesta)
app.get("/ep",Cencpreg.insertarencpreg)
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
};


