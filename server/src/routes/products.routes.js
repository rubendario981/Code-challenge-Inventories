const { Router } = require("express");
const { createRecord, getRecordsByUserId } = require("../controllers/products.controller");


const router = Router();

router.post("/new", createRecord)

router.get("/user-record/:id", getRecordsByUserId)

// router.post("/", login)

// router.get("/:id", getUserById)

// router.put("/:id", updateUser)

// router.delete("/:id", deleteUser)

module.exports = router;