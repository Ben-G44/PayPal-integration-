require ('dotenv').config()
const express = require('express')
const paypal = require('./services/paypal')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/pay', (req, res) => {
  try{
    const url = await paypal.createOrder()

    res.redirect(url)
  } catch (error){
    res.send('Error:' + error)
  }
})

app.get('/complete-order', (req, res) => {
  res.send('Complete-Order')
})

app.get('/cancel-order', (req, res) => {
 res.redirect('/') 
})

app.listen(8080, () => console.log('server started on port 8080'))