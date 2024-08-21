const mongoose = require("mongoose");
// Contact schema for the database
//require[true/false, error message if otherwise]
const contactSchema =  mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    name:{
        type: String,
        require: [true, "Please add the contact name"],
    },
    email:{
        type: String,
        require: [true, "Please add the contact email"],
    },
    phone:{
        type: String,
        require: [true, "Please add the contact phone number"],
    },
},
{
    timestamps: true,

}
);

module.exports = mongoose.model("Contact", contactSchema);