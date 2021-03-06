const express = require(`express`),
  es6Renderer = require(`express-es6-template-engine`),
  app = express();
const path = require("path");

app.engine("html", es6Renderer);
app.set("views", "views");
app.set("view engine", "html");

app.listen(3333, () => {
  console.log("server running on port 3333");
});

app.use(express.static("public"));

const rootController = require("./routes/index"),
  page1Controller = require("./routes/page1"),
  page2Controller = require("./routes/page2"),
  page3Controller = require("./routes/page3");

app.use("/", rootController);
app.use("/page1", page1Controller);
app.use("/page2", page2Controller);
app.use("/page3", page3Controller);
