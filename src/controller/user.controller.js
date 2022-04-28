const userSerivce = require("../service/user.service")
const sign = require("../utlis/secretSign")

class UserController {
  async register(ctx, next) {
    try {
      const { user, password } = ctx.request.body
      const res = await userSerivce.register(user, sign.sendSHA256(password))
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

  async login(ctx, next) {
    try {
      const { user, password } = ctx.request.body
      const res = await userSerivce.login(user, sign.sendSHA256(password))
      if (res[0].length > 0) {
        const {id, user, role} = res[0][0]
        ctx.body = {
          code: 200,
          token: sign.sendToken({id, user, role}),
          message: "登录成功！"
        }
      } else {
        ctx.body = {
          code: 500,
          message: "账户名或密码错误！"
        }
      }
    } catch (error) {
      return ctx.app.emit("error", error, ctx)
    }
  }
}

module.exports = new UserController()