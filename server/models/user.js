const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
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