const Products = require('./../models/productModels');

exports.GetAllProducts = async (req, res) => {
	try {
		const name = req?.query?.name;
		const filter = {};
		if (name) filter.name = { $regex: name, $options: 'i' };
		const product = await Products.find(filter);
		res.status(200).json({
			status: 'success',
			data: {
				Products: product,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'error',
			requestedAt: req.requestTime,
			message: err.message,
		});
	}
};
exports.CreateProduct = async (req, res) => {
	try {
		const product = await Products.create(req.body);
		res.status(201).json({
			status: 'success',
			data: {
				Products: product,
			},
		});
	} catch (err) {
		console.log(err);
		res.status(400).json({
			status: 'fail',
			message: 'invalid field',
		});
	}
};

exports.DeleteAllProducts = async (req, res) => {
	try {
		const product = await Products.deleteMany();
		res.status(200).json({
			status: 'deleted',
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'failed',
			data: null,
		});
	}
};
exports.GetProductsById = async (req, res) => {
	try {
		const id = req.params.id * 1;
		const product = await Products.findById(req.params.id);

		res.status(200).json({
			status: 'success',
			length: product.length,
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: 'no Data',
		});
	}
};

exports.RemoveProductsById = async (req, res) => {
	try {
		const id = req.params.id * 1;
		const product = await Products.findByIdAndDelete(req.params.id);

		res.status(200).json({
			status: 'success',
			length: product.length,
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: 'no Data',
		});
	}
};

exports.UpdateProductsById = async (req, res) => {
	try {
		const product = await Products.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
			runValidators: true,
		});

		res.status(201).json({
			status: 'success',
			result: 'hello from update',
			data: {
				product,
			},
		});
	} catch (err) {
		res.status(400).json({
			status: 'fail',
			message: 'no Data',
		});
	}
};

exports.FindProductsByQuery = (req, res) => {
	const q = req.params.query;
	console.log(q);
	res.status(201).json({
		status: 'success',
		result: 'hello from Remove',
		query: q,
	});
};
