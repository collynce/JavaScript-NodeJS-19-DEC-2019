const bodyParser = require('body-parser');
const cors = require('cors');

const express = require('express');
const app = express();


const host = 'localhost';
const port = 5000;

const home = 'NodeJS with Express js framework';
const staff = {
    staff1: {
        id: 1,
        name:'Emilia Bosco',
        age: 20
    },
    staff2: {
        id: 2,
        name:'Nancy Smiles',
        age: 28
    },
    staff3: {
        id: 3,
        name:'Mercy Smith',
        age: 22
    }
};

const clients = {
    client1: {
        id: 1,
        name:'john Michael',
        age: 20
    },
    client2: {
        id: 2,
        name:'Ambrose Spencer',
        age: 20
    },
    client3: {
        id: 3,
        name:'Doe James',
        age: 20
    }
};


app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(home);
});

app.get('/client', (req, res) => {
    res.send(clients);
});

app.get('/staff', (req, res) => {
    res.send(staff);
});



app.listen(port, host, () => {
    console.log(`App is running at http://${host}:${port}/`);
});
