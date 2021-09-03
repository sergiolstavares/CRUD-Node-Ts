import { model, Schema } from "mongoose"


const UserSchema = new Schema({

    cpf: String,
    nome: String,
    email: String,
    idade: Number
})

export default model("User", UserSchema)