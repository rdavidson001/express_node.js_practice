const asyncHandler = require("express-async-handler");

// pulls the contact Schema model for the database
const Contact = require("../models/contactModel");

// @desc GET all contacts
// route GET /api/contacts
// @access private
const getallContacts = asyncHandler(async (req, res) =>{
    const contacts = await Contact.find({user_id: req.user.id });
    res.status(200).json(contacts);
});
 
//@desc GET single contact by id
// route GET /api/contact/:id
// @access private
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
    }
    res.status(200).json(contact);
   
});
// @des post a contact
// route POST /api/contact
// @access private
const postContact = asyncHandler(async  (req, res) =>{
    console.log("body being passed is", req.body);
    const {name, email, phone} = req.body;
    if(!name || !email, !phone){
        res.status(400);
        throw new Error("All fields mandated");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id,
    });
    res.status(202).json(contact);
});

//@desc update a contact by id
// route PUT /api/contact/:id
// @access private

const updateContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact could not be found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true}
    );
    console.log({updatedContact});
    res.status(200).json(updatedContact);
});

//@desc delete a contact by id
// route DELETE /api/contact/id
//@access private
const deleteContact = asyncHandler(async (req, res) =>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact could not be found");
    } 

    await Contact.deleteOne({_id: req.params.id});
    res.status(200).json(contact);
});



//must export all logic

module.exports = {
    getallContacts,
    getContact,
    postContact,
    updateContact, 
    deleteContact
}