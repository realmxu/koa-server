const KoaRouter = require("koa-router")

const auth = require("../middleware/auth.middle")
const commentController = require("../controller/comment.controller")

const router = new KoaRouter({prefix: "/api"})

router.get("/comment", auth.authToken, commentController.getCommnetList)

module.exports = router