const { option } = require("../config/config");
const knex = require("knex")(option.mysql);
const knex3 = require('knex')(option.sqlite)

const productos = require('./file.json')

//productos
/* knex.schema
  .createTable("products", (table) => {
    table.increments("id");
    table.string("make");
    table.string("model");
    table.float("price");
    table.string("thumbnail");
    table.string("description");
    table.string("code");
    table.integer("stock")
  })
  .then(() => console.log("table created"))
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => knex.destroy());

  knex('products').insert(productos)
  .then(() => console.log("registros insertados"))
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => knex.destroy()); */

  //mensajes
/*   knex3.schema
  .createTable("messages", (table) => {
    table.increments("id");
    table.string("name");
    table.string("message");
  })
  .then(() => console.log("table created"))
  .catch((error) => {
    console.log(error);
    throw error;
  })
  .finally(() => knex3.destroy()); */

/* knex3('messages').insert({name: "Gabo", message: "cargado desde loader"})
.then(() => console.log('registro creado'))
.catch((error) => {
  console.log(error);
  throw error;      
})
.finally(() => knex3.destroy()); */

knex3('messages').del()
.then(() => console.log('registro eliminado'))
.catch((error) => {
  console.log(error);
  throw error;      
})
.finally(() => knex3.destroy()); 
