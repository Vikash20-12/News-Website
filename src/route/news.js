const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async(req, res)=> {
    try {
        const newsAPI = await axios.get(`https://newsapi.org/v2/everything?q=Apple&from=2021-07-04&sortBy=popularity&apiKey=68ebbb86c34b486396a74dcfcd0090c7`)
        // console.log(newsAPI.data);
        res.render('news.ejs',{ newsHeads: newsAPI.data})
    } catch (err) {
        if(err.response){
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if(err.request){
            console.log(err.request)
        }else{
            console.error('Error: ', err.message)
        }
    }
})



module.exports = router;
