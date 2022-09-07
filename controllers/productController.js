const Product = require('../models/product');

// Create Product
module.exports.createProduct = async function (req, res) {
    try {
        let product = new Product({
            productCategory: req.body.category,
            productInfo: req.body.info,
            price: req.body.price,
            quantityAvailable: req.body.quantity,
        });
        await product.save()
        return res.status(200).json({
            data: {
                message: "Product created",
                product: product
            }
        })
    } catch (err) {
        return res.send('Error in creating product' + err);
    }
}

// Update quantity
module.exports.updatePrice = async function (req, res) {
    try {
        let product = await Product.findById(req.params.id);
        let price = parseInt(req.body.price);
        if (price < 0) {
            return res.status(200).json({
                data: {
                    message: "Price could not be less then 0",
                }
            })
        } else {
            product.price = price
            await product.save()
            return res.status(200).json({
                data: {
                    message: "Product price updated successfully",
                    products: product
                }
            })
        }
    } catch (err) {
        return res.send('Error in updating price of the product ' + err);
    }
}
