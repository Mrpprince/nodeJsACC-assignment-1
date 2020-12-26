const mongoose = require('mongoose')
const { Schema } = mongoose;
mongoose.promise = global.Promise

const schemaShop = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    }
},
    {
        timestamps: true,
        versionKey: false
    }


);

module.exports=mongoose.model("Shop",schemaShop);