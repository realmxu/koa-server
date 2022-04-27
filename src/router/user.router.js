const KoaRouter = require("koa-router")

const verify = require("../middleware/verify.middleware")

const router = new KoaRouter({prefix: "/api"})

router.post("/register", verify.verifyUserPwd)



module.exports = router