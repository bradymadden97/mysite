const express = require('express');
const exphb = 	require('express-handlebars');
const app = express();


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

app.get("/", function(req, res){
  res.render('index', {
    title: "Hello yo"
  });
});

app.listen(port, function(){
	if(!process.env.port)
		console.log('Dashboard @ localhost:3000');
});
