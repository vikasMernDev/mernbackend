const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    dob: String,
    salary: String,
    relevingDate: String,
    joiningDate: String,
    status: String,
    contact: String,
});

const UserModal = mongoose.model("users", userSchema);

module.exports = UserModal;