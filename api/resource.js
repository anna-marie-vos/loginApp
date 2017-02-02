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
      console.log('api/resource.js ', allUsers);
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
    const entered_password = req.body.password
    db.findUserByEmail(email)
    .then(function(user){
      console.log('findUserByEmail returned', user);
    })
  }

  function postNewUser(req,res, next){
    const user = {
      'name':req.body.name,
      'email': req.body.email,
      'password':req.body.password
    }

    db.addNewUserToTable(user)
    .then(function(userByID){
      console.log('userByID', userByID[0]);
    })

  }

  return route;
};
