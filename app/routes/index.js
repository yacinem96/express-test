const express = require("express");
const contactRoutes = require('./contact');
const servicesRoutes = require('./services');
const router = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.render("layouts", {
      pageTitle: "Home page",
      title: "Hooooooome",
      template: "index",
    });
  });


  router.use("/services",servicesRoutes());
  router.use("/contact",contactRoutes());

  return router;
};
