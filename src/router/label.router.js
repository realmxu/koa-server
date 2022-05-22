const KoaRouter = require("koa-router")

const labelController = require("../controller/label.controller")

const auth = require("../middleware/auth.middleware")

const router = new KoaRouter({prefix: "/api"})

router.post("/label", auth.authToken, labelController.create)
router.put("/label", auth.authToken, labelController.addCommentLabels)


module.exports = router

