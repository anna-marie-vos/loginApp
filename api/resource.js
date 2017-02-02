const bcrypt = require('bcryptjs')
const express = require("express");
const route = express.Router();


module.exports = function(db) {


//   /api/v1/
  route.get("/dummyData", dummyData);
  route.get("/allUsers", getAllUsers);
  route.get("/:id/profile", getProfileByID);
  route.post("/login", postLoginData);
  route.post("/register", postNewUser);

  function dummyData(req,res,next){
    res.json({data:'hello'})
  }

  function getAllUsers(req, res, next) {
    db.displayAllUsers()
    .then(function(allUsers){
      res.json(allUsers);
    })
  }

  function getProfileByID(req,res,next){
  console.log('api/getProfileByID', req.params);
    var id = req.params.id
    db.displayUserByID(id)
    .then(function(userData){
      res.json(userData)
    })
  }

  function postLoginData(req, res, next) {
    const email = req.body.email

    db.findUserByEmail(email)
    .then(function(user){
      res.json(checkPassword(req.body,user[0]))
    })
  }

  function postNewUser(req,res, next){
    const user = {
      'name':req.body.name,
      'email': req.body.email,
      'password':req.body.password
    }
    //encrypt password
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(user.password, salt, function(err, hash) {
        //add hashed password back to user object
        user.password = hash
          db.addNewUserToTable(user)
          .then((userByID)=>{
            res.json(userByID[0])
          })
      })
    })
  }
  return route;
};

function checkPassword(loginEntry, dbEntry){
  console.log('checkPassword', loginEntry, dbEntry);
  if(!dbEntry){
    //if there is not entry in the db return error
    return {login: false, error: 'Invalid email or Password'}
  } else {
    //if there is something in the db check the incryption
    bcrypt.compare(loginEntry.password, dbEntry.password, function(err, response) {
      if (response) {
        return {id: dbEntry.id, login: true}
      } else {
        return {login: false, error: 'Invalid email/Password'}
      }
    })
  }
}
