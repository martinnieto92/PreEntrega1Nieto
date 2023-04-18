class Item{
    estilo;
    precio;
    cantidad;

    constructor(estilo,precio,cantidad)
    {
        this.estilo = estilo;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    subTotal = () => {
        return this.precio*this.cantidad;
    }
}