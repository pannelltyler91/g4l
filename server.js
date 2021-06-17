const express = require('express');
const app = express();
const db = require('./models')
const port = process.env.PORT || 3001;
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const cors = require('cors')
var session = require('express-session');
const secret = 'shhh';
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const withAuth = require('./middleware');

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(express.urlencoded({ extended: false }))

app.post('/api/customer/signup',(req,res) =>{

    //checks to see if user already exists
    var matched_users_promise = db.Users.findAll({
        where:  Sequelize.or(
                {userName: req.body.username}
                
            )
    });
    matched_users_promise.then((users) =>{ 
        // creates new user if no user exists
        if(users.length == 0){
            const passwordHash = bcrypt.hashSync(req.body.password,10);
            db.Users.create({
                userName: req.body.username,
                password: passwordHash,
                userType:'customer',
                address: req.body.address,
                phone:req.body.phone
            }).then(function(){
                res.json({newclient:req.body.username})
            });
        }
        // re renders register page with error if found duplicate
        else{
        
            res.json({error:'Username or email already exists! Please try registering with a different email or username.'})
        }
    })
});

app.post('/api/customer/login', (req,res) => {
    const { email, password } = req.body;
    //check to see if user exists with username
    var matched_users_promise = db.Users.findAll({
        where: Sequelize.and(
            {userName: req.body.username},
        )
    });
    matched_users_promise.then(function(users){ 
        // creates token(in form of a cookie) if password provided from login matches user password when hashed
        if(users.length > 0){
            let user = users[0];
            let passwordHash = user.password;
            if(bcrypt.compareSync(req.body.password,passwordHash)){
                const payload = {email};
          const token = jwt.sign(payload, secret, {
            expiresIn: 1800
          });
          res.cookie('token', token, { httpOnly: true })
            .sendStatus(200);
            }
            // Wrong password rerenders the login page with Password Error  *Fixed*
            else{
                res.json( {message: "Unsuccessful login"});
            }
        }
        // Wrong Username  re renders login page with Username error. *Fixed*
        else{
            res.json({errors: "Username is Wrong"});
        }
    });
})

app.get('/api/customer/profile', withAuth, (req,res) => {
    res.json({greeting:'안녕'});
})

app.get('/api/home', (req,res) => {
    res.json({message:'Welcome Home!'});
})



app.use(express.static(__dirname +'build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/build/index.html');
})


app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
});
