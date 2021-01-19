const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const db = require("./config/db");
require('dotenv').config(); 

// require routes
const todo = require("./routes/todo");
const user = require("./routes/user");
const auth = require("./routes/auth");

//importing the models
require("./models/User");
require("./models/Todo");

// DB
db.sync()
  .then(() => console.log("DB is Connected"))
  .catch((error) => console.log(error));

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(expressValidator());


// routes
app.use("/api", auth);
app.use("/api", user);
app.use("/api", todo);

// host and port
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 4001;

app.listen(port, host, () => {
  console.log(`server is running on ${host}:${port}`);
});
