const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const typesSchema = new Schema({

    id : {
        type : String,
        required :true

    },
    inqtype:{
        type :String ,
        required : true
    },

  

})

const Type = mongoose.model("Type",typesSchema);

module.exports =Type;
