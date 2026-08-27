use('ecommerce');
// aggregation is used for to transform large data into groups etc by filtering, grouping, sorting etc and eg we have a database collection of sales and we have 5 documents now we want to match fruit so only category fruits will be shown, and one thing is that each stage of output should be the next stage of input and it will contineu means depending on data

// db.sales.insertMany([
//     {_id : 1, item : "Apple", price : 10, quantity : 5, category: "Fruit"},
//     {_id : 2, item : "Banana", price : 5, quantity : 10, category: "Fruit"},
//     {_id : 3, item : "Carrot", price : 8, quantity : 6, category: "Vegetable"},
//     {_id : 4, item : "Tommato", price : 6, quantity : 8, category: "Vegetable"},
//     {_id : 5, item : "Mango", price : 15, quantity : 3, category: "Fruit"}
// ])


// db.sales.aggregate([
//     {$match : {category : "Fruit"}},
//     {$project : {_id : 0, item : 1, quantity: 1}} // means i want to look only item and quantity and i did not want to look the id
// ])

db.sales.aggregate([
    {$group : {
        _id : "$category",
        totalSales : {$sum : {$multiply : ["$price", "$quantity"]}}
    }}
])