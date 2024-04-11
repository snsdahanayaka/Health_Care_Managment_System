const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquirySchema = new Schema({

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

const Inquiry = mongoose.model("Inquiry", inquirySchema);

module.exports = Inquiry;
