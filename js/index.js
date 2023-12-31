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

    costoTotal() {
        return this.carrito.reduce((total, producto) => total + producto.precio, 0);
    }

    totalEn3Cuotas() {
        return this.subtotal / 3;
    }
}

function buscarProducto(codigo) {
    let productoBuscado = productos.find((producto) => producto.codigo === codigo);
    return productoBuscado;
}

function filtrarXprecioMenor(importe) {
    let resultado = productos.filter((producto) => producto.precio <= importe);
    if (resultado.length > 0) {
        console.log("Estos son los productos encotrados con un precio menor a $" + importe + ":")
        console.table(resultado);
    } else {
        console.warn("No se encontraron coincidencias");
    }
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
            console.log("El total de los productos seleccionados es de: $" + miCompra.costoTotal() + ".");
            console.log("En hasta 3 cuotas de: $" + miCompra.totalEn3Cuotas().toFixed(2) + " sin interés.");

            let filtrar = confirm("¿Deseas filtrar productos por precio?");
            if (filtrar === true) {
                let importe = prompt("Ingresa el precio aproximado:");
                filtrarXprecioMenor(importe);
            }
        }
    
    } else {
        alert("Producto no encontrado. No se ha agregado al carrito. \n(Refresca la página para volver a comenzar)");
    }
}


//comprar() -----> para ejecutar la función en la consola;
