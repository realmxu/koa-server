const KoaRouter = require("koa-router")

const auth = require("../middleware/auth.middleware")
const commentController = require("../controller/comment.controller")

const router = new KoaRouter({prefix: "/api"})

router.post("/comment", auth.authToken, commentController.sendComment)
router.get("/comment/:id", auth.authToken, commentController.getComment)
router.get("/comment",auth.authToken, commentController.getCommentList)



module.exports = router