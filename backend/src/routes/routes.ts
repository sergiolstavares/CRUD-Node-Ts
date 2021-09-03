import { Router } from "express";
import UserController from "../controller/UserController";


var router = Router()

router.get('/users', UserController.listar)
router.post('/users/cadastrar', UserController.cadastro)
router.put('/users/atualizar/:id', UserController.Atualizar)
router.delete('/users/deletar/:id', UserController.deletar)

export default router