const express = require('express')
const app = express();
const connect = require('./configs/db');
const Url = require('./controllers/url.controller');
const Redirect = require('./controllers/redirect.controller')
app.use(express.json())


app.use('/', Redirect)
app.use('/api/url', Url)


app.listen(5000, async () => {
    try {
        await connect();
        console.log('Listening on Port 5000 !')
    } catch (error) {
        console.log('error:', error)
    }
})
