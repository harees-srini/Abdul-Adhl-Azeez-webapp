const { request, response } = require("express");
const express = require("express");
const router = express.Router();
const registerTemplateCopy = require("../models/userModels");

router.post('/register', (request, response) => {
    const registeredUser = new registerTemplateCopy({
        fullName:request.body.fullName,
        userName:request.body.userName,
        email:request.body.email,
        passWord:request.body.passWord
    }); 
    registeredUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json('Nooooo'+error)
    })
});

module.exports = router;