const mongoose = require("mongoose");


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required:[true, "Please add a username"],

    },
    email:{
        type: String,
        required:[true, "Please add user email"],
        unique: [true, "Email address already in use"]
    },
    password:{
        type: String,
        required:[true, "Please add the user password"],
    },
},
    {
        timestamps: true,
    });

module.exports = mongoose.model("User", userSchema);