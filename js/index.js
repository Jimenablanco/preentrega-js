const carrito = [];

const productos = [{codigo: 100, nombre: 'Fanal Pagoda', precio: 21000},
                    {codigo: 101, nombre: 'Vasija Globo', precio: 13000},
                    {codigo: 102, nombre: 'Florero Arco', precio: 24300},
                    {codigo: 103, nombre: 'Florero Grasáceo', precio: 23100},
                    {codigo: 104, nombre: 'Florero Patas', precio: 15000},
                    {codigo: 105, nombre: 'Florero Redondo', precio: 18000},
                    {codigo: 106, nombre: 'Florero Vasija', precio: 51400},
                    {codigo: 107, nombre: 'Florero Globo Grande', precio: 15000},
                    {codigo: 108, nombre: 'Cuenco Nuoro', precio: 73990},
                    {codigo: 109, nombre: 'Florerito Alas', precio: 8400},
                    {codigo: 110, nombre: 'Florero Florecitas', precio: 36000}]

class Compra {
    constructor() {
        this.carrito = [];
        this.subtotal = 0;
    }

    agregarProducto(producto) {
        this.carrito.push(producto);
        this.subtotal += producto.precio;
    }

    totalEn3Cuotas() {
        return this.subtotal / 3;
    }
}

function buscarProducto(codigo) {
    let productoBuscado = productos.find((producto) => producto.codigo === codigo);
    return productoBuscado;
}

const miCompra = new Compra();

function comprar() {
    let codigo = prompt("Ingresa el código del producto (se encuentra abajo del nombre):");
    let productoElegido = buscarProducto(parseInt(codigo));

    if (productoElegido !== undefined) {
        miCompra.agregarProducto(productoElegido);

        console.log("Se ha agregado al carrito " + productoElegido.nombre + ".");
        console.log("Subtotal actual: $" + miCompra.subtotal + ".");

        let respuesta = confirm("¿Deseas agregar otro producto a tu carrito?");
        if (respuesta === true) {
            comprar();
        } else {
            console.table(miCompra.carrito);
            console.log("El costo total de los productos seleccionados es: $" + miCompra.subtotal + ".")
            console.log("El costo total en 3 cuotas sin interés es: $" + miCompra.totalEn3Cuotas().toFixed(2) + ".");
        }
    } else {
        alert("Producto no encontrado. No se ha agregado al carrito. \n(Refresca la página para volver a comenzar)");
    }
}

//comprar() -----> para ejecutar la función en la consola;
