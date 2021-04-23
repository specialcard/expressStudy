const express = require('express');
const router = express.Router();



function testMiddleware(req,res,next){
  console.log('첫번째 미들웨어');
  next();
}



router.get('/',testMiddleware,(req,res)=>{
  res.send('admin 이후 url')
})
router.get('/products',(req,res)=>{
  // res.send('admin products')
  res.render('admin/products.html',{
    message: 'hello',
    hi: `<h1> khd </h1>`
  })
})

router.get('/products/write', (req,res)=>{
  res.render('admin/write.html');
})

router.post('/products/write', (req,res)=>{
  res.send(req.body);
});

module.exports = router;