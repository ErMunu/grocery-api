# Grocery Store Backend
An API for Grocery Store. This is complete node
application with routes, controllers and models.

## Setup

Run `npm install` to install required dependencies

Create .env with following variables
- PORT = [Your Port]
- MongoURL = [Your MongoDB Url]

Run `npm start`

## Api url
- Api to fetch Customers list: get `/customers`
- Api to fetch specific Customer Orders List: get `/customers/{id}/orders`
- Api to fetch customer Details with maximum Orders in an year: get `/customers/max-orders`
- Api to create new Customer: post `/customers/new` : req.body => {email, name, phone}
- Api to create new Product: post `/products/new` : req.body => {productCategory, productInfo, price, quantityAvailable}
- API to update Product Price: post `/products/{id}/price-update`: req.body => {price}
