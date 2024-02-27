const { default: axios } = require('axios');
const express = require('express');
const app = express();


app.use(express.json());



app.post('/fetch-data', (req, res) => {

    const url = req.body.url;
   
    const data = axios.get(url).then(response => {
        res.json(response.data);
    }
    ).catch(error => {
        res.status(400).send('Error');
    })

})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})