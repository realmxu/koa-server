const connection = require("../app/database")


class UserService {
  async register (user, password) {
    try {
      const sql = "insert account(user, password) into values (?,?) "
      const res = await connection.execute(sql, [user, password])
      return res
    } catch (error) {
    }
  }
}