const express = require("express");
const router = express.Router();

const { requireSignin, isAuth } = require("../controllers/auth");

// importing controllers
const {
  listTodos,
  getSingleTodo,
  createTodo,
  changeStateTodo,
  updateTodo,
  removeTodo,
} = require("../controllers/todo");

const { userById } = require("../controllers/user");

// get all todos
router.get("/todos/:userId", requireSignin, isAuth, listTodos);

// get a todo
router.get("/todos/:id/:userId", requireSignin, isAuth, getSingleTodo);

// create a todo
router.post("/todos/:userId", requireSignin, isAuth, createTodo);

// complete a todo
router.patch("/todos/:id/:userId", requireSignin, isAuth, changeStateTodo);

// update a todo
router.put("/todos/:id/:userId", requireSignin, isAuth, updateTodo);

// delete a todo
router.delete("/todos/:id/:userId", requireSignin, isAuth, removeTodo);

router.param("userId", userById);

module.exports = router;
