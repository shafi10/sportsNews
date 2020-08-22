import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Tennis = () => {
    const [topnews, settopnews] = useState([])
     useEffect(() => {
         const func = async () => {
            const res = await axios.get('http://newsapi.org/v2/everything?q=tennis&from=2020-07-21&sortBy=publishedAt&apiKey=6873ce9956014696adbc4f7a5b61b586')
            settopnews(res.data.articles)
         }
         func()
        }, [])
    return (
        <div className="row mt-4">
            {topnews.map(news => 
            <div className="col-md-4 mb-4">
                <div class="card">
                <img src={news.urlToImage} class="card-img-top" alt="..." />
             <div class="card-body">
            <h5 class="card-title">{news.title}</h5>
            <p class="card-text">{news.description}</p>
               <a href={news.url} class="btn btn-primary">Go for publisher</a>
           </div>
        </div>
            </div>
            )}
        </div>
    )
}

export default Tennis