const express = require('express');
const app = express();


const users = [
    {
        id: 1,
        name: 'John',
        email: 'john@mail.com',
        salary: 10000,
        role: 'admin'
    },
    {
        id: 2,
        name: 'Cagatay',
        email: 'cagatay@mail.com',
        salary: 20000,
        role: 'user'
    },
    {
        id: 3,
        name: 'Ece',
        email: 'ece@mail.com',
        salary: 30000,
        role: 'user'
    }
]



function verifyUser(req, res, next) {

    const userId = req.headers['userid'];

    if (userId && parseInt(userId) === req.params.id) {
        next();
    }
    else {
        res.status(401).send('Unauthorized');
    }
}


app.put('/users/:id', verifyUser, (req, res) => {



    const user = users.find(u => u.id === parseInt(req.params.id));

    const role = user.role;

    if (role === 'admin') {
        user.salary = req.body.salary;
        user.email = req.body.email;
        res.json(user);
    }

    if (!user) {
        return res.status(404).send('User not found');
    }

}
)




app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
)