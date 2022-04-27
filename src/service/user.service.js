const connection = require("../app/database")


class UserService {
  async register (user, password) {
    const sql = "insert into account(user, `password`) values (?,?);"
    return await connection.execute(sql, [user, password])
  }
  async isExist(user) {
    const sql = "select * from account where user = ?;"
    return await connection.execute(sql, [user])
  }
}


module.exports = new UserService()