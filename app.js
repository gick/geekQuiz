let Express = require('express')

let session = require('express-session');
var morgan = require('morgan')

let cors=require('cors')

var mongoose = require('mongoose')

let BodyParser=require('body-parser')

let app=Express()
app.use(morgan('combined'))
app.use(cors({
    origin:['http://localhost:8000','http://localhost:3000','http://albiziapp.reveries-project.fr','https://albiziapp.reveries-project.fr'],
    methods:['GET','POST'],
    credentials: true // enable set cookie
}
));
app.use(session({
    saveUninitialized: true,
    secret: "thedogsleepsatnight",
}));

app.use(BodyParser.urlencoded({
    extended: true,
    limit: '50mb'
}))
app.use(express.static('./dist'))

app.use(BodyParser.json({limit: '50mb'}))
let database=mongoose.connect("mongodb://localhost:27017/geek")
require('./routes/routes')(app)
app.listen(80)
