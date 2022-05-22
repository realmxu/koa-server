const connection = require("../app/database")

class Comment {
  async sendComment(id, title, content) {
    const sql = "insert into comment(user_id, title, content) values (?,?,?);"
    return await connection.execute(sql, [id, title, content])
  }

  async getComment(id) {
    const sql = `select 
      m.id,
      m.title,
      m.content,
      JSON_OBJECT("id", u.id, "role", u.role, "user",u.user) user,
      IF(COUNT(j.id), JSON_ARRAYAGG(JSON_OBJECT("id", j.id, "judgeContent", j.judge_content, "selfId", j.self_id, "user", 
      JSON_OBJECT("id", u.id, "name", u.user, "role", u.role)
      )), NULL) judge,
      (select 
        count(*) 
      from judge j where j.comment_id = m.id ) total
      from comment m
      left join account u on m.user_id = u.id 
      left join judge j on m.id = j.comment_id
      where m.id = ?
      group by m.id`
    return await connection.execute(sql, [id])
  }

  async getCommentList(currentPage, pageSize) {
    const sql = `select 
      m.id,
      m.title,
      m.content,
      JSON_OBJECT("id", u.id, "role", u.role, "user",u.user) user,
      IF(COUNT(j.id), JSON_ARRAYAGG(JSON_OBJECT("id", j.id, "judgeContent", j.judge_content, "selfId", j.self_id, "user", 
      JSON_OBJECT("id", u.id, "name", u.user, "role", u.role)
      )), NULL) judge,
      (select 
        count(*) 
      from judge j where j.comment_id = m.id ) total
      from comment m
      left join account u on m.user_id = u.id 
      left join judge j on m.id = j.comment_id
      group by m.id
      limit ? offset ?;`
    return connection.execute(sql, [String(pageSize), String((currentPage - 1 ) * pageSize)])
  }

  async getUserIdByCommentId(commentId) {
    const sql = "select * from comment where id = ?;"
    return await connection.execute(sql, [commentId])
  }

  async modifyComment(id, title, content) {
    const sql = "update comment set title = ?,content = ? where id = ?;"
    return await connection.execute(sql, [title, content, id])
  }

  async deleteComment(id) {
    const sql = "delete from comment where id = ?;"
    return connection.execute(sql, [id])
  }
}


module.exports = new Comment()