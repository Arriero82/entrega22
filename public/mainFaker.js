const socket = io.connect() 

console.log('prueba desde mainFaker');

const render = (prods) => {     
    const listado = prods.map((elem) => {
        return(         
            `<div class="articulos">
            <h3>Marca ${elem.make}</h3>
            <h3>Modelo ${elem.model}</h3>
            <h3>Precio ${elem.price}</h3>
            <img src="${elem.thumbnail}" alt="${elem.title}"/>
            </div>`
        )
    });
    document.querySelector('#listaProductosFaker').innerHTML = listado;
}

socket.on('productos-faker', (prods) => {
    render(prods)
})



    