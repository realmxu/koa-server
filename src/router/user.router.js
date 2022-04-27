const KoaRouter = require("koa-router")

const verify = require("../middleware/verify.middleware")
const userController = require("../controller/user.controller")

const router = new KoaRouter({prefix: "/api"})

// 用户注册
router.post("/register", 
  verify.verifyUserPwd, 
  verify.duplicateUser, 
  userController.register
)



module.exports = router