import { Request, Response } from "express";
import User from "../schemas/User";


class UserController {
    public async listar(req: Request, res: Response): Promise<Response> { //Método assincrono

        try {
            const users = await User.find()

            return res.json(users)
        } catch (e) {
            return res.sendStatus(500)
        }

    }

    public cadastro(req: Request, res: Response): Response {

        try {
            const user = req.body
            User.create(user)

            return res.json(user)

        } catch (e) {
            return res.sendStatus(500)
        }

    }

    public async Atualizar(req: Request, res: Response): Promise<Response> {

        try {
            const idUser = req.params.id

            const { cpf, nome, email, idade } = req.body

            const userUpdated = {
                cpf,
                nome,
                email,
                idade
            }

            await User.findByIdAndUpdate(idUser, userUpdated)

            return res.status(200).send({ Success: `Usuário com o id ${idUser} atualizado com sucesso` })

        } catch (e) {

            return res.status(500).send({ Error: "Erro interno ao tentar atualizar o usuário. Tente novamente mais tarde." })
        }


    }

    public async deletar(req: Request, res: Response): Promise<Response> {

        try {
            const idUser = req.params.id

            await User.findByIdAndDelete(idUser)

            return res.status(200).send({ Success: "Usuario deletado com sucesso!" })

        } catch (e) {
            return res.status(500).send({ Error: "Ocorreu um erro ao deletar!" })
        }
    }



}

export default new UserController()