const mongoose = require("mongoose");
const registerTemplate = new mongoose.Schema({
    fullName:{
        type: String,
    },
    userName:{
        type: String,
    },
    email:{
        type: String,
    },
    passWord:{
        type: String,
    }
    // date: {
    //     type: Date, 
    //     default: Date.now
    // }
});


// const User = mongoose.model('myTable', registerTemplate);
// module.exports = User;
module.exports = mongoose.model('newcoll', registerTemplate);