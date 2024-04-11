const router = require("express").Router();
let Inquiry = require("../models/Inquiry");

router.route("/add").post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phone = req.body.phone;
    const type = req.body.type;
    const message = req.body.message;

    const newInquiry = new Inquiry({
        name,
        email,
        phone,
        type,
        message
    });
    console.log(Object.entries(newInquiry));
    newInquiry.save().then(() => {
        res.json("Successfully Created");
    }).catch((err) => {
        console.log(err);
        res.status(400).json("Failed to create inquiry");
    });
});

router.route("/").get((req, res) => {
    Inquiry.find().then((inquiries) => {
        res.json(inquiries);
    }).catch((err) => {
        console.log(err);
        res.status(500).json("Failed to retrieve inquiries");
    });
});

module.exports = router;
