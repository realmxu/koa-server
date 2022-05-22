const labelService = require("../service/label.service")

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body
    try {
      const res =  await labelService.create(name)
      ctx.response.body = {
        code: 200,
        message: "添加成功！"
      }
    } catch (error) {
      ctx.app.emit("error", error, ctx)
    }
  }
}


module.exports = new LabelController()