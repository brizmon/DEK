const bcrypt = require('bcryptjs');
const User = require('../models/user.js');
const usersController = {};






usersController.create = (req, res) => {
    // console.log(req.body)
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.options.password, salt);
    User.create({
        username: req.body.options.userName,
        email: req.body.options.email,
        password_digest: hash,
        firstname: req.body.options.firstName,
        lastname: req.body.options.lastName,
    })
    .then(user => {
        console.log(`Created ${user}`)
        req.login(user, (err) => {
            if(err) return next(err);
            res.json({
                message: 'ok',
                user: user,
                auth: true,
            })
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    })
}


















usersController.index = (req, res) =>{
    console.log(`${req.user.username} signed in`);
}








module.exports = usersController;
