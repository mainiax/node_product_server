const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'A product must have a name'],
		trim: true,
	},
	description: {
		type: String,
		required: [true, 'A product must have a description'],
		trim: true,
	},
	price: {
		type: Number,
		required: [true, 'A product must have a price'],
	},
	published: {
		type: Boolean,
		default: false,
	},
	category: {
		type: String,
		required: [true, 'A product must belong to a category'],
		trim: true,
	},
});

const Product = mongoose.model('Products', productSchema);

module.exports = Product;
