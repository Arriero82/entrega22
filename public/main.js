const socket = io.connect() 

console.log('prueba desde main.js');    

const addProduct = () => {
    const make = document.querySelector('#make').value;
    const model = document.querySelector('#model').value;
    const price = document.querySelector('#price').value;
    const thumbnail = document.querySelector('#thumbnail').value;
    const description = document.querySelector('#description').value;
    const code = document.querySelector('#code').value;
    const stock =  document.querySelector('#stock').value
    socket.emit('new-product', {make, model, price, thumbnail, description, code, stock})
    return false
}
document.getElementById('enviar').addEventListener('click', () => addProduct())
    
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
    document.querySelector('#listaProductos').innerHTML = listado;
}

const addMessage = () => {
    const name = document.querySelector('#name').value;
    const message = document.querySelector('#message').value;
    socket.emit('new-message', {name, message})    
    return false
}
document.getElementById('sendMessage').addEventListener('click', () => addMessage())

const renderMessages = (messages) => {     
    const messagesList = messages.map((elem) => {
        return(
            `<div>
            <strong>${elem.name}</strong >
            <em>${elem.message}</em >
            </div >`
        )
    }).join(' ');
    document.querySelector('#listaMensajes').innerHTML = messagesList;
}

socket.on('productos-server', (prods) => {
    render(prods)
})

socket.on('mensajes-server', (mensajes) => {
    renderMessages(mensajes)
} )

    