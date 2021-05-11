const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/User');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const path = require('path');
require('dotenv/config');
const app = express();

//Cors Middleware to handle cors related issues in development
app.use(cors());

//Bodyparser Middleware *** Might not be needed anymore. Need to research
app.use(express.json());
app.use(cookieParser("Secret"))
app.use(bodyParser.urlencoded({ extended: true }));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);
app.use(require("express-session") ({
    secret:"Secret",
    resave: false,
    saveUninitialized: false
}))
app.use(express.static(path.join(__dirname, "client", "build")))


passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Import Routes
const gamesRoute = require('./routes/games');
const playersRoute = require('./routes/players');
const usersRoute = require('./routes/users');
//const authRoute = require('./routes/auth');
//const loginRoute = require('./routes/login');
//const registerRoute = require('./routes/register');

//Use Routes
app.use('/games', gamesRoute);
app.use('/players', playersRoute);
app.use('/users', usersRoute);
//app.use('/auth', authRoute);
//app.use('/login', loginRoute);
//app.use('/register', registerRoute);

//Routes
app.post("/login", (req, res, next) => {
    passport.authenticate("local", (err, user, info) => {
      if (err) throw err;
      if (!user) res.send("No User Exists");
      else {
        req.logIn(user, (err) => {
          if (err) throw err;
          res.send("Successfully Authenticated");
          console.log(req.user);
        });
      }
    })(req, res, next);
  });
  app.post("/register", (req, res) => {
    User.findOne({ username: req.body.username }, async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
  
        const newUser = new User({
          username: req.body.username,
          password: hashedPassword,
        });
        await newUser.save();
        res.send("User Created");
      }
    });
  });
  app.get("/user", (req, res) => {
    res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
  });
app.get('/', (req, res) => {
    res.send('We are home');
})

/* app.post'/login', (req, res) => {
    //Authenticate user

}) */

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,
{ useNewUrlParser: true, useUnifiedTopology: true }, 
() => console.log('Connection to DB succesful.'));


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
//Start listening to server
const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));