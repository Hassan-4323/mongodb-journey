use('ecommerce');
db.dropDatabase();
db.products.insertMany([
    {
        name : "Wireless Mouse",
        price : 79,
        category : "Electronics",
        stock : 120,
        ratings : 4.5,
        tags : ["Computer", "Accessory", "Wireless"],
        createdAt : new Date()
    },


    {
        name : "Mechanical Keyboard",
        price : 2479,
        category : "Electronics",
        stock : 80,
        ratings : 4.9,
        tags : ["Keyboard", "Mechanical"],
        createdAt : new Date()
    },


    {
        name : "Gaming Laptop",
        price : 12379,
        category : "computers",
        stock : 30,
        ratings : 4.6,
        tags : ["Laptop", "Accessory", "Wireless"],
        createdAt : new Date()
    }
])

db.contacts.insertMany([
    {
        name : "Hassan",
        phone : 92873892738,
        message : "hello from hassan side",
        createdAt : new Date()
    },
    {
        name : "Jan",
        phone : 38298392892,
        message : "hello from jan side",
        createdAt : new Date()
    },
    {
        name : "Hassan Jan",
        phone : 192293892839,
        message : "hello from hassan jan side",
        createdAt : new Date()
    }
])

db.orders.insertMany([
    {
        orderId : 1,
        name : "Hassan",

        products : [
            {name : "Laptop", price: 231, quantity : 31},
            {name : "Mouse", price: 232, quantity : 11},
            {name : "Computer", price: 434, quantity : 21}
        ],
        total : 9382,
        status : "Delivered",
        createdAt : new Date()
    },

    {
        orderId : 2,
        name : "Jan",

        products : [
            {name : "keyboard", price: 431, quantity : 30},
            {name : "keypad", price: 262, quantity : 1},
            {name : "notebook", price: 734, quantity : 29}
        ],
        total : 2323,
        status : "Pending",
        createdAt : new Date()
    }
])