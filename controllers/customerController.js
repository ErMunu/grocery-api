const Customer = require('../models/customer');

module.exports.customerList = async (req, res) => {
    try {
        let customers = await Customer.find()
        return res.status(200).json({
            data: {
                message: "Customers list",
                customers: customers
            }
        })
    } catch (err) {
        return res.send('Error in fetching customer list: ' + err);
    }
}

module.exports.ordersList = async (req, res) => {
    try {
        let customer = await Customer.findById(req.params.id).populate();
        return res.status(200).json({
            data: {
                message: `Order list for ${customer.name}`,
                orders: customer.orders
            }
        })
    } catch (err) {
        return res.send('Error in fetching order list: ' + err);
    }
}

module.exports.maxOrders = async (req, res) => {

    let toDate = Date.now();
    let fromDate = toDate - 365*24*60*60000;

    try {
        let customers = await Customer.find({
            createdAt: {$gte: `${fromDate}` , $lte: `${toDate}`}
        }).populate();

        let max = Number.MIN_VALUE - 1;
        let customerWithMaxOrders;

        customers.forEach(customer => {
            if(customer.orders.length > max){
                customerWithMaxOrders = customer;
                max = customer.orders.length;
                console.log(max);
            }
        });

        return res.status(200).json({
            data: {
                message: `Customer with Max orders in a year`,
                customer: customerWithMaxOrders
            }
        })
    } catch (err) {
        return res.send('Error in fetching Customer detais: ' + err);
    }
}

module.exports.createCustomer = async function (req, res) {
    try {
        let customer = new Customer({
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone
        });
        await customer.save()
        return res.status(200).json({
            data: {
                message: "Customer created",
                products: customer
            }
        })
    } catch (err) {
        return res.send('Error in creating customer: ' + err);
    }
}