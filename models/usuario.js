const {Schema, model} = require('mongoose')

const AccesoSchema = Schema({
    correo: {
        type: String,
        unique: true,
        required: [true, 'El correo es obligatorio']
    },

    contrasena: {
        type: String,
        required: [true, 'la contraseña es obligatoria'],
        minlength: [3, 'Debe tener mínimo 3 caracteres']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    },


    contrasena2: {
        type: String,
        required: [true, 'la contraseña debe de ser igual'],
        minlength: [3, 'Debe tener mínimo 3 caracteres']
        //maxlength:  [7, 'Debe tener máximo 3 caracteres']
    }
})

//Exportar la función AccesoSchema
module.exports = model('Acceos',AccesoSchema)

