const express = require('express') 

const app = express()

const newsRouter = require('./routes/news')
app.use('/news', newsRouter);

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server runnung on ${PORT}`)
})