const express = require("express");
// add router service
const router = express.Router();
// pulls data from contactController for api route
const { getallContacts, 
    getContact, 
    updateContact, 
    postContact, 
    deleteContact } = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
// add validated token to all the routes
router.use(validateToken);

// if you want to only use the validate token on some routes,
// then you would add them directly to the router.route() path
// EX -> router.route("/:id").get(getallContacts, validateToken);
router.route("/").get(getallContacts).post(postContact);
// since they have the same route pathing ( "/:id"), we can add them togother
// in the same line of code.
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);




// we can then add get, post, put and delete methods

// must export the routes useing module.exports
module.exports = router;
