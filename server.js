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

app.post('/api/customer/signUp',(req,res) =>{
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
                userType:'customer'
            }).then(function(){
                let newSession = req.session;
                newSession.userName = req.body.username;
                res.redirect('/');
            });
        }
        // re renders register page with error if found duplicate
        else{
        
            res.json({error:'Username or email already exists! Please try registering with a different email or username.'})
        }
    })
});



app.use(express.static(__dirname +'build'));

app.get('*', (req, res) =>{
    res.sendFile(__dirname +'/build/index.html');
})


app.listen(port, () => {
    console.log(`App listening on PORT ${port}`);
});
