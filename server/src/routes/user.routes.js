const { Router } = require("express");
const { createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser } = require('../controllers/user.controller.js');

  const router = Router();

  router.post("/", createUser)
  
  router.get("/", getAllUsers)

  router.get("/:id", getUserById)
  
  router.put("/:id", updateUser)

  router.delete("/:id", deleteUser)

  module.exports = router;

