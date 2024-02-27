const express = require('express');
const app = express();

const allowedUrls = [
    'https://www.google.com',
    'https://www.bing.com'
]


app.post('/fetch-data', (req, res) => {
    
        const url = req.body.url;
    
        if (allowedUrls.includes(url)) {
            const data = axios.get(url).then(response => {
                res.json(response.data);
            }
            ).catch(error => {
                res.status(400).send('Error');
            })
        }
        else {
            res.status(401).send('Unauthorized');
        }
    
})




app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
)