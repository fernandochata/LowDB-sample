# LowDB

Ejemplo simple de LowDB, info en https://www.npmjs.com/package/lowdb


- instalar dependencias
- se requiere la siguiente variable de entorno [PORT], en caso de no encontrar se usa una por defecto
- ejecutar script en modo desarrollo
```
npm install
npm run dev
```

- modelo usado
```
{
    product: 
    {
        name :          String
        price:          Number
        stock:          Number
        description:   String
    }
}
```
- rutas usadas
```
{
    getProducts: {
        url: '/products',
        method: 'GET'
    },
    getProducto: {
        url: '/products/:id',
        method: 'GET'
    },
    createProduct: {
        url: '/products',
        method: 'POST'
    },
    updateProduct: {
        url: '/products/:id',
        method: 'PUT'
    },
    deleteProduct: {
        url: '/products/:id',
        method: 'DELETE'
    }
}
```
- TODO: ❌ Comentar detalle de uso de LowDB en controllers/products.js