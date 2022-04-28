class CommentController {
  async getCommnetList(ctx, next) {
    const { id, user, role } = ctx.state
    ctx.body = {
      ...ctx.state
    }
  }
}

module.exports = new CommentController()