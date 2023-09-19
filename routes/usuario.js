const {Router} = require('express')
//Desestructuración. Extraer un atributo de un objeto

const route = Router() 

//Importar métodos del controlador
const {accesoGet, accesoPost, accesoPut, accesoDelete} = require('../controllers/usuario')

route.get('/', accesoGet) //Listar Datos

route.post('/', accesoPost) //Insertar Datos

route.put('/', accesoPut) //Modificar Datos

route.delete('/', accesoDelete) //Eliminar Datos

module.exports = route