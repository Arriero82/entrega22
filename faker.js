const {faker} = require('@faker-js/faker')

faker.locale = "es";
const { vehicle, commerce, image } = faker;   

let str = []

function prodFaker(){
    str = []
    for (let i = 0; i < 5; i++) {
        str.push({make: vehicle.manufacturer(), model: vehicle.model(), price: commerce.price(3000,5000,0), image: image.transport(500,500)});
      }
    return str;      
}

module.export = prodFaker;