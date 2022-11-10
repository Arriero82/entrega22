const { option } = require("../config/config");
const knex = require("knex")(option.mysql);

class Products {
  constructor(table) {
    this.table = table;
  }
  async getAll() {
    try {
      const productos = await knex(this.table).select("*");
      if (productos.length > 0) {
        return productos;
      } else {
        return [];
      }
    } catch (error) {
      console.log(error);
    }
  }
  async save(obj) {
    try {
      await knex(this.table).insert(obj);
      console.log('registro creado');
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Products;
