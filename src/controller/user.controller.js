const userSerivce = require("../service/user.service")


class UserController {
  async register(ctx, next) {
    try {
      const { user, password } = ctx.request.body
      const res = await userSerivce.register(user, password)
      if (res[0].affectedRows) {
        ctx.body = {
          code: 200,
          message: "注册成功!"
        }
      }
    } catch(error) {
      return ctx.app.emit("error", error, ctx)
    }
  }
}

module.exports = new UserController()