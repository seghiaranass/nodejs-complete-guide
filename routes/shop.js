const express = require('express');

const router = express.Router();

router.get('/',(req,res,next)=>{
    console.log('In the another middleware!');
    res.send('<h1>Hello from Express! </h1> <a href="/admin/add-product">Add Product</a>');
});


module.exports = router;