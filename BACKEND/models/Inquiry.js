const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquiriesSchema = new Schema({

    name: {
        type: String,
        required: true

    },
    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    type: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

})

const Inquiry = mongoose.model("Inquiry", inquiriesSchema);

module.exports = Inquiry;
