const express = require('express');
const app = express();
const db = require('./models')
const port = process.env.PORT || 3001;
var Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const cors = require('cors')
var session = require('express-session');



app.use(express.json());
app.use(cors());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(express.urlencoded({ extended: false }))

app.post('/api/customer/signup',(req,res) =>{
    var matched_users_promise = db.Users.findAll({
        where:  Sequelize.or(
                {userName: req.body.username}
                
            )
    });
    matched_users_promise.then((users) =>{ 
        // renders home page if correct
        if(users.length == 0){
            const passwordHash = bcrypt.hashSync(req.body.password,10);
            db.Users.create({
                userName: req.body.username,
                password: passwordHash,
                userType:'customer',
                address: req.body.address,
                phone:req.body.phone
            }).then(function(){
                let newSession = req.session;
                newSession.userName = req.body.username;
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
    var matched_users_promise = models.User.findAll({
        where: Sequelize.and(
            {email: req.body.email},
        )
    });
    matched_users_promise.then(function(users){ 
        // renders home page if password hash and email matches 
        if(users.length > 0){
            let user = users[0];
            let passwordHash = user.password;
            if(bcrypt.compareSync(req.body.password,passwordHash)){
                req.session.email = req.body.email;
                res.json({message:'success'});
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

app.get('/api/customer/profile', (req,res) => {
    res.json({greeting:'안녕'});
})

app.get('/api/home', (req,res) => {
    res.json({message:'Welcome Home'});
})



app.use(express.static(__dirname +'build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/build/index.html');
})


app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
});
