const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    paymentInfo: {
        type: String,
        required: true
    },
    totalPrice: {
        type: String,
        required: true
    },
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Customer'
    },
    productList: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]

}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;