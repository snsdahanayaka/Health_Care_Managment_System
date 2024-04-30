const router = require("express").Router();
const Inquiry = require("../models/Inquiry.js");

router.route("/add").post((req, res) => {
    const { name, email, phone, type, message } = req.body;

    const newInquiry = new Inquiry({
        name,
        email,
        phone,
        type,
        message
    });

    newInquiry.save()
        .then(() => {
            res.json("Successfully Created");
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json("Failed to create inquiry");
        });
});

router.route("/").get((req, res) => {
    Inquiry.find()
        .then((inquiries) => {
            res.json(inquiries);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json("Failed to retrieve inquiries");
        });
});

router.route("/update/:inquiryId").put((req, res) => {
    const inquiryId = req.params.inquiryId;
    const { replyMessage } = req.body;

    Inquiry.findByIdAndUpdate(inquiryId, { replyMessage })
        .then(() => {
            res.json("Update Success");
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json("Failed to update inquiry");
        });
});

router.route("/delete/:inquiryId").delete(async (req, res) => {
    const inquiryId = req.params.inquiryId;
    try {
        await Inquiry.findByIdAndDelete(inquiryId);
        res.status(200).send({ status: "Inquiry deleted" });
    } catch (err) {
        console.error(err.message);
        res.status(500).send({ status: "Error with delete inquiry", error: err.message });
    }
});

router.route("/view/:inquiryId").get((req, res) => {
    const inquiryId = req.params.inquiryId;
    Inquiry.findById(inquiryId)
        .then((inquiry) => {
            res.json(inquiry);
        })
        .catch((err) => {
            console.error(err);
            res.status(400).json("Failed to view inquiry");
        });
});

module.exports = router;
