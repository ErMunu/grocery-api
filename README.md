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
- Api to fetch Customers list: `/customers`
- Api to fetch specific Customer Orders List: `/customers/{id}/orders`
- Api to fetch customer Details with maximum Orders in an year: `/customers/max-orders`
- Api to create new Customer: `/customers/new`
- Api to create new Product: `/products/new`
- API to update Product Price: `/products/{id}/price-update`