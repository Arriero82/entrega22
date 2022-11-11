const express = require("express");
const { Server: IOServer } = require("socket.io");
const { Server: HttpServer } = require("http");
const app = express();
const httpServer = HttpServer(app);
const io = new IOServer(httpServer);
const path = require("path");
//const productos = require("./router/products");
const Products = require("./container/container");
const products = new Products("products");
const Messages = require("./container/messContainer");
const messages = new Messages("messages");
const {faker} = require('@faker-js/faker')

faker.locale = "es";
const { vehicle, commerce, image } = faker;  

let str = []

const prodFaker = function(){
  str = []
    for (let i = 0; i < 5; i++) {
        str.push({make: vehicle.manufacturer(), model: vehicle.model(), price: commerce.price(3000,5000,0), thumbnail: image.transport(500,250,true)});
      } 
    return str;      
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));  

app.use(express.static(path.join(__dirname, "/public")));

app.set("views", "./views");
app.set("view engine", "ejs");

//app.use("/", productos);

app.get("/api/productos", async (req, res) => {
  res.status(200).render("pages/productosFaker");
})

app.get("/", async (req, res) => {
  res.status(200).render("pages/index");
});

app.all("*", (req, res) => {
  res.json({ res: "no se puede acceder a esta ruta" });
});

const PORT = 8085;

const server = httpServer.listen(PORT, () => {
  console.log(`listening in port ${server.address().port}`);
});

io.on("connection", async (cliente) => {
  console.log(`cliente ${cliente.id} conectado`);

  cliente.emit("productos-server", await products.getAll());
  //cliente.emit('productos-server', await prodFaker())
  cliente.emit('productos-faker', prodFaker())

  cliente.on("new-product", async (producto) => {   
    await products.save(producto);
    io.sockets.emit("productos-server", await products.getAll());
  });

  cliente.emit("mensajes-server", await messages.getAll());

  cliente.on("new-message", async (mensaje) => {
    await messages.save(mensaje)

    io.sockets.emit("mensajes-server", await messages.getAll());
  });
});
