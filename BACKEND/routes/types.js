const router = require("express").Router();
let Type = require("../models/Type");

router.route("/add").post((req, res) => {
    const id = req.body.name;
    const inqtype = req.body.name;

    const newType = new Type({
        id,
        inqtype
    });

    newType.save().then(() => {
        res.json("Success");
    }).catch((err) => {
        console.log(err);
    });
});