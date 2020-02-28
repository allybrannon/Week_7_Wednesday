const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.render("template", {
    locals: {
      title: "A Grimm Fairy Tale"
    },
    partials: {
      partial: "partial-index"
    }
  });
});

module.exports = router;
