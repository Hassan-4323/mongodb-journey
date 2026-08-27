use('ecommerce');

// db.products.updateOne(
//     {name: "Wireless Mouse"},
//     {$set : {price : 989}}
// )

// it increase the stock by 27
db.products.updateMany(
    {category : "Electronics"},
    {$inc : {stock : 27}}
)

db.products.updateOne(
    {name : "Wireless Mouse"},
    {$push : {tags : "Mobile"}}
)