'use strict';

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

exports.myStaff = function (req, res) {
  res.send(staff);
};

exports.myClient = function (req, res) {
  res.send(clients);
};

