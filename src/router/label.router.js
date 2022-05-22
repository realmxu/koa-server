const KoaRouter = require("koa-router")

const labelController = require("../controller/label.controller")

const auth = require("../middleware/auth.middleware")

const router = new KoaRouter({prefix: "/api"})

router.post("/label", auth.authToken, labelController.create)


module.exports = router

