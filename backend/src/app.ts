import express from "express";
import mongoose from "mongoose"
import router from "./routes/routes"

class App {

    public express: express.Application

    constructor() {
        this.express = express()

        this.middlewares() // tenho que chamar essa função sempre antes das outras se não os jsons não entram no sistema 
        this.database()
        this.routes()


    }

    private async database() {

        try {
            await mongoose.connect("mongodb://localhost:27017/backend")
            return console.log("banco conectado!")
        }
        catch (e) {
            console.log("banco desconectado")
        }



    }

    private async routes() {
        try {
            this.express.use(router)
        } catch (e) {
            throw new Error(e + "Ocorreu um erro ao conectar as rotas")
        }

    }

    private middlewares(): void {
        this.express.use(express.json())
    }

}


export default new App().express