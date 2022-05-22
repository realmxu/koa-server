const connection = require("../app/database")

class LabelService {
  async create(name) {
    const sql = "insert into label(name) values (?);"
    return await connection.execute(sql, [name])
  }

  async getLabelIdByName(name) {
    const sql = "select * from label where name = ?;"
    return await connection.execute(sql, [name])
  }

  async createCommentLabel(commentId, labelId) {
    const sql = "insert into rlabel(comment_id, label_id) values (?, ?);"
    return await connection.execute(sql, [commentId, labelId])
  }

  async isExistRelative(comment_id, label_id) {
    const sql = "select * from rlabel where comment_id = ? and label_id = ?"
    const [result] = await connection.execute(sql, [comment_id, label_id])
    return result.length > 0 ? true : false
  }
}

module.exports = new LabelService()