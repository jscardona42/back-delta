export class CreateUsuariosInput {
    nombre: string
    correo: string
    clave: string
}


export class UpdateUsuariosInput extends CreateUsuariosInput {
    id_usuario: number
}

export class SignInUsuariosInput {
    correo: string
    clave: string
}