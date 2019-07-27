const mongoose = require('mongoose');
const validator = require('validator');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        username: {
            type: String,
            required: [true, 'Username required field.'],
            maxlength: [32, 'Username must be less than 32 characters.'],
            minlength: [6, 'Too short name, username must be greater than 6 characters.'],
            // match:[/^[a-z0-9]+$/,"usernameIncorrect"],
            unique: [true, 'This name is already in use.']
        },
        email: {
            type: String,
            required: true,
            unique: [true, 'This email is already in use.'],
            validate: [validator.isEmail, 'Invalid email.']
        },
        firstName: String,
        lastName: String,
        age: Number,
        password: String
    }, {
        timestamps: true
    }
);

schema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('user', schema);