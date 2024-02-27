const app = require('express')();

const users = [
    {
        id: 1,
        name: 'John',
        email: 'john@mail.com'
    },
    {
        id: 2,
        name: 'Cagatay',
        email: 'cagatay@mail.com'
    },
    {
        id: 3,
        name: 'Ece',
        email: 'ece@mail.com'
    }
]


function authenticate(req, res, next) {
    var token = req.headers['authorization'];

    if (!token) {
        return res.status(401).send('Unauthorized');
    }

    let result = token.includes("123")
    if(token.includes("123"))
    {
       return next();
    }
    else
    {
        return res.status(401).send('Unauthorized');
    }
}

app.get('/',authenticate, (req, res) => {
    res.send('Hello World');
})


app.get('/users',authenticate, (req, res) => {
    res.send(users);
})


app.get('/users/:id', authenticate,(req, res) => {

    var token = req.headers['authorization'];
    let userid = token.split(",")[1];

    if(userid != req.params.id)
    {
        return res.status(401).send('Unauthorized');
    }

    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) {
        return res.status(404).send('User not found');
    }
    res.send(user);
})



app.listen(3000, () => {
    console.log('Server is running on port 3000');
})