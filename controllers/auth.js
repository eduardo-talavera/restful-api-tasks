const User = require('../models/User');
const jwt = require('jsonwebtoken'); // to generate signed token
const expressJwt = require('express-jwt'); // for authorization check
const { errorHandler } = require('../helpers/dbErrorHandler');


exports.signup = async (req, res) => {

    const { name, email, password, role } = req.body;

    try {

      const user = await User.create({
        name,
        email,
        password,
        role
      });  

      res.json({user});

    } catch (error) {
      return res.status(400).json({
        error: errorHandler(error)
      });
    }

};


exports.signin = async (req, res) => {

    const { password } = req.body;
    
    try {

        // find the user based on email
        const user = await User.findOne({
          where: { email : req.body.email }
        });

        // the user does not exists
        if (!user) {
          return res.status(400).json({
            error: 'User with that email does not exist. Please signup'
          });
        }
    
        // the user exists but the password don't match
        if (!user.authenticate(password)) {
          return res.status(401).json({
            error: 'Email and password dont match'
          })
        }

        // user and password match so generate a signed token with user id and secret
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET);
        // persist the token as 't' in cookie with expire date
        res.cookie('t', token, {expire: new Date() + 9999});
        // return response with user and token to frontend client
        const {id, name, email, role } = user;
        return res.json({token, user: {id, email, name, role}});
      
    } catch (error) {
        res.status(401).json({
          error: errorHandler(error)
        })
    }
}; 


exports.signout = (req, res) => {
    res.clearCookie('t');
    res.json({message: "Signout success"});
};


exports.requireSignin = expressJwt({
    secret: process.env.JWT_SECRET,
    userProperty: "auth"
});


exports.isAuth = (req, res, next) => {
  let user = req.profile && req.auth && req.profile.id == req.auth.id;
  if (!user) {
    return res.status(403).json({
      error: "Access denied"
    });
  }
  next();
};



















