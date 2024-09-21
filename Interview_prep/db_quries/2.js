
const pipe1 = `Retrieve the total sales revenue for each product category, sorted in descending order of revenue.`
const A1 = `db.sales.aggregate([
    {
        $lookUp:{
            from:'products',
            localField: "product_id",
            foreignField: "_id",
            as:"products
        }
    },
    {
        $unwind:"$products"
    },
    {
        group:{
            _id:"$productid"
            totalRevenue:{$sum:$amount}
        }
    }
    {
        $sort:{totalRevenue: -1}
    }
])`

const pipe2 = `Retrieve the names and ages of all customers who made a purchase after January 1, 2023, and project only 
               the "name" and "age" fields in the output.`

const A2 = `db.customers.aggregate([

    {
        $match:{
            purchase_date:{ $gt: ISODate("2023-01-01)}
        }
    },
    {
        $project:{
            _id:0
            name:1,
            age:1
        }
    }
])`
