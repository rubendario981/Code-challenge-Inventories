const { Router } = require("express");
const { getAllUsers,
  getUserById,
  updateUser,
  deleteUser, 
  login,
  signup} = require('../controllers/user.controller.js');

  const router = Router();

  router.post("/signup", signup)
  
  router.post("/login", login)

  router.get("/", getAllUsers)

  router.get("/:id", getUserById)
  
  router.put("/:id", updateUser)

  router.delete("/:id", deleteUser)

  module.exports = router;

