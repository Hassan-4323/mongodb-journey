use('ecommerce')

// db.products.find({"name": "Wireless Mouse"});
// db.products.find({category : "Electronics"});

// db.products.find({price :{$gt : 1000}});

// db.products.find({
//     $or: [{ category: "computers" },
//     { stock: { $lt: 50 } }]
// });

db.products.find().sort({price: -1}).limit(1);
