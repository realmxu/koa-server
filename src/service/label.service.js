const connection = require("../app/database")

class LabelService {
  async create(name) {
    const sql = "insert into label(name) values (?);"
    return await connection.execute(sql, [name])
  }
}

module.exports = new LabelService()