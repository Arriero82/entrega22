const { option } = require("../config/config");
const knex3 = require("knex")(option.sqlite);

class Messages {
  constructor(table) {
    this.table = table;
  }
  async getAll() {
    try {
      const messages = await knex3(this.table).select("*");
      if (messages.length > 0) {
        return messages;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error); 
    }
  }
  async save(obj) {
    try {
      await knex3(this.table).insert(obj)
      console.log('registro creado');
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Messages;
