const express = require('express');
const exphb = 	require('express-handlebars');
const showdown  = require('showdown');
const forceSSL = require('force-ssl-heroku');
const app = express();
const converter = new showdown.Converter();


var port = process.env.PORT || 3000;
var hbs = exphb.create({
	defaultLayout: 'main',
	helpers: {
		json: function(context){
			return JSON.stringify(context);
		},
		section: function(name, options){
			if(!this._sections){
				this._sections = {};
			}
			if(name in this._sections){
				this._sections[name] = this._sections[name] + options.fn(this);
			}else{
				this._sections[name] = options.fn(this)
			}
			return null;
		}
	},
	partialsDir: __dirname + '/views/partials/'
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public'));
app.use(forceSSL);

app.get("/", function(req, res){
  res.render('me', {
    title: "Brady Madden",
    tab: 'me'
  });
});

app.get("/blog", function(req, res){
  res.render('blog', {
    title: "Brady Madden - Blog",
    tab: 'blog'
  });
});

app.get("/projects", function(req, res){
  res.render('projects', {
    title: "Brady Madden - Projects",
    tab: 'projects'
  });
});

app.listen(port, function(){
	if(!process.env.PORT)
		console.log('Dashboard @ localhost:3000');
});
