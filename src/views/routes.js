const Task = require('./models/task');

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

// vista reportes
app.get('/reportes', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('reportes', {
		user: req.user,
		tasks
	});
});
};

function isLoggedIn (req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}

	res.redirect('/');
};


