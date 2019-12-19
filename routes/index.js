'use strict';

module.exports = function (app) {
  const myCompany = require('./users.js');

  app.route('./client')
      .get(myCompany.myClient());

  app.route('./staff')
      .get(myCompany.myStaff());
};
