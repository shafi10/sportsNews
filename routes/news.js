const express = require('express')
const router = express.Router()
const axios = require('axios')



router.get('/sports', async (req,res)=>{
    const resp = await axios.get('https://newsapi.org/v2/everything?q=sports&sortBy=publishedAt&apiKey=6873ce9956014696adbc4f7a5b61b586')
    res.json(resp.data.articles)
});

router.get('/football', async (req,res)=>{
    const resp = await axios.get('https://newsapi.org/v2/everything?q=soccer&sortBy=publishedAt&apiKey=6873ce9956014696adbc4f7a5b61b586')
    res.json(resp.data.articles)
});

router.get('/tennis', async (req,res)=>{
    const resp = await axios.get('https://newsapi.org/v2/everything?q=tennis&sortBy=publishedAt&apiKey=6873ce9956014696adbc4f7a5b61b586')
    res.json(resp.data.articles)
});

router.get('/cricket', async (req,res)=>{
    const resp = await axios.get('https://newsapi.org/v2/everything?q=cricket&sortBy=publishedAt&apiKey=6873ce9956014696adbc4f7a5b61b586')
    res.json(resp.data.articles)
});

module.exports = router;