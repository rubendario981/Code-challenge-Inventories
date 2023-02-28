const { Router } = require('express');
const router = Router();
const routesUser = require("./user.routes.js")

router.use('/user', routesUser);

module.exports = router;
