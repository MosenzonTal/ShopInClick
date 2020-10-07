const express = require('express');
const router = express.Router();
const {database} = require('../config/helpers');

/* GET ALL PRODUCTS. */
router.get('/', function(req, res) {
    /* Set the current page number*/
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    /* Set the limit Items For page*/
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;

    let startValue;
    let endValue;

    if (page > 0){
      startValue = (page * limit) - limit; // 0 , 10 , 20 , 30 .... ((1*10)-10)=0
      endValue = page * limit;
    } else {
      startValue=0;
      endValue=10;
    }

    database.table('products as p')
        .join([{
          table: 'categories as c',
            on: 'c.id = p.cat_id'
        }]).withFields(['c.title as category',
        'p.title as name',
        'p.price',
        'p.description',
        'p.quantity',
        'p.image', // in the page shows all products will be only one picture for each product
        'p.id'
    ])
        .slice(startValue,endValue)
        .sort({id: .1}) // ASCENDING ORDER
        .getAll()
        .then(prods => {
            if(prods.length > 0){
                res.status(200).json({
                    count: prods.length,
                    products: prods
                });
            } else {
                res.json({message: 'No Products Found'});
            }
        }).catch(err => console.log(err));
});

/* GET Single PRODUCTS. */
router.get('/:prodId', (req, res) => {
    let productId = req.params.prodId; // extract parameters sent in the url
    console.log(productId);




    database.table('products as p')
        .join([{
            table: 'categories as c',
            on: 'c.id = p.cat_id'
        }]).withFields(['c.title as category',
        'p.title as name',
        'p.price',
        'p.description',
        'p.quantity',
        'p.image',
        'p.images', // Only in single product will be more than 1 picture
        'p.id'
    ])
        .filter({'p.id': productId})
        .get() // all functionality comes before get. after get always comes then
        .then(prod => {
            if (prod){
                res.status(200).json(prod); // we return the Product here
            } else {
                res.json({message: `No Product found with product id ${productId}`});
            }
        }).catch(err => console.log(err));
});

/* GET ALL PRODUCTS FROM ONE PARTICULAR CATEGORY. */
router.get(('/category/catName'), (req, res) => { // for example : category/electronics
    /* Set the current page number*/
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    /* Set the limit Items For page*/
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 10;

    let startValue;
    let endValue;

    if (page > 0){
        startValue = (page * limit) - limit; // 0 , 10 , 20 , 30 .... ((1*10)-10)=0
        endValue = page * limit;
    } else {
        startValue=0;
        endValue=10;
    }

    // Fetch the category name from the url
    const cat_title = req.params.catName;
    database.table('products as p')
        .join([{
            table: 'categories as c',
            on: `c.id = p.cat_id WHERE c.title LIKE '%${cat_title}%'`
        }]).withFields(['c.title as category',
        'p.title as name',
        'p.price',
        'p.description',
        'p.quantity',
        'p.image', // in the page shows all products will be only one picture for each product
        'p.id'
    ])
        .slice(startValue,endValue)
        .sort({id: .1}) // ASCENDING ORDER
        .getAll() // get array
        .then(prods => {
            if(prods.length > 0){
                res.status(200).json({
                    count: prods.length,
                    products: prods
                });
            } else {
                res.json({message: `No Products Found from ${cat_title} category`});
            }
        }).catch(err => console.log(err));
})

module.exports = router;
