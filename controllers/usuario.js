const {response} = require('express')

//Importación de los modelos
const Acceso = require('../models/usuario')

//Método GET de la API
const accesoGet = async(req, res = response) =>{
    //const {nombre} = req.query //Desestructuración

    //Consultar todos los pedidos
    const accesos = await Acceso.find()

    res.json({  //Respuesta en JSON
        accesos
    })   
}

//Método POST de la api
const accesoPost = async(req, res) => {
    let mensaje = 'Inserción Exitosa'
    const body = req.body //Captura de atributos
    try {
        const acceso = new Acceso(body) //Instanciando el objeto
        await acceso.save() //Inserta en la colección
    } catch (error) {
        mensaje = error
        console.log(error)
    }
        res.json({
        msg: mensaje
    })
}

//Juan Sebastián Granada

//Modifcación
const accesoPut = async(req, res = response) => {

    const {correo, contrasena, contrasena2} = req.body
    let mensaje = 'Modificación exitosa'
    try{
         await acceso.findOneAndUpdate({correo: correo}, {$set: {
            correo:correo, contrasena:contrasena, contrasena2:contrasena2
    }}) 
         
           
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la modificación.'
    }

    res.json({
        msg: mensaje
    })
}

//Eliminación
const accesoDelete = async(req, res) => {

    const {_id} = req.query
    let mensaje = 'La eliminiación se efectuó exitosamente.'

    try{
        const acceso = await acceso.deleteOne({_id: _id})
    }
    catch(error){
        mensaje = 'Se presentaron problemas en la eliminación.'
    }

    res.json({
        msg: mensaje
    })
}

module.exports = {
    accesoGet,
    accesoPost,
    accesoPut,
    accesoDelete
}