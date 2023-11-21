const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({

    name :  {
        type: String,
        required: [true,"Please enter contact name."],
    },
    email :  {
        type: String,
        required: [true,"Please enter email."],
    },

    phone :  {
        type: String,
        required: [true,"Please enter phone."],
    },
},
{
  timestamps: true,
}
);

module.exports = mongoose.model("Contact",contactSchema);