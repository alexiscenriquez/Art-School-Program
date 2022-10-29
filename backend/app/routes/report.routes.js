module.exports = app => {
  const Reports = require("../controllers/report.controller.js");

  var router = require("express").Router();

  // Retrieve all student eith view
  router.get("/view_students", Reports.view_students);
  
  app.use('/api/reports', router);
};