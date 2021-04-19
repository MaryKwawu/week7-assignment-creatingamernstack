const router = require("express").Router();
const todoController = require("../controllers/todoController");
// const { verifyToken } = require("../controllers/authController");

router.get("/", todoController.getAllTodos);

router.get("/:id", todoController.getTodo);

router.post("/", todoController.createTodo);

router.patch("/:id", todoController.updateTodo);

router.patch("/:id/toggle", todoController.toggleCompleted);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
