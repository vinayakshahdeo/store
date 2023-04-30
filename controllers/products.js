const Product = require('../models/products')
const getAllProductsStatic = async (req, res) => {
	const products = await Product.find({
		name: 'vase table'
	});
	res.status(200).json({
		products,
		nbHits: products.length
	})
}
const getAllProducts = async (req, res) => {
	const {
		query: {
			featured
		}
	} = req;
	const queryObject = {}
	if (featured) {
		queryObject.featured = featured === 'true' ? true : false
	}
	const products = await Product.find(
		queryObject
	);
	res.status(200).json({
		products,
		nbHits: products.length
	})
}
module.exports = {
	getAllProducts,
	getAllProductsStatic
}