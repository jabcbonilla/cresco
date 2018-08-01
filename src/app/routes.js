const Task = require('./models/task');

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
// profile
	app.get('/profile', async (req, res) => {
	const tasks = await Task.find();
	console.log(tasks);
	res.render('profile', {
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


