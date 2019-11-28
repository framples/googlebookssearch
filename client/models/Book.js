const mongoose = require("moongose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        unique: true
    },

    authors: [{
        type: String
    }],

    description: {
        type: String,
    },

    image: {
        type: String
    },

    link: {
        type: String,
        unique: true
    }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;