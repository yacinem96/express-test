const express = require("express");
const { posts } = require("../../data");
const router = express.Router();

module.exports = () => {


    router.get("/", (req, res) => {
        res.render("layouts", {
          pageTitle: "Sevices page",
          title: "Our Services",
          postsList:posts,
          template: "services",
        });
      });

  return router;
};
