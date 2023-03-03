const { Router } = require('express');
const router = Router();
const routesUser = require("./user.routes.js")
const routesProducts = require("./products.routes.js")

router.use('/user', routesUser);

router.use('/product', routesProducts);

module.exports = router;
