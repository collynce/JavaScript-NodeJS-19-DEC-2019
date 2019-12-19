'use strict';

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

exports.myClient = function (req, res) {
    res.send(clients);
};
