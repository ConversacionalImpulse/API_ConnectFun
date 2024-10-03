import dotenv from "dotenv";
import { sendMessageWA } from "../services/sendBriefingMessage.js";

dotenv.config();

export async function createMessage(req, res) {

    let {
        nomeCliente,
        telefone,
        espacoEscolhido,
        dataEvento,
        publico,
        tipoEvento,
        outrosServicos,
        orcamento,
        duvida
    } = req.body;

    try {

        const ConnectID = "573606460"

        const send = await sendMessageWA(
            ConnectID,
            nomeCliente,
            telefone,
            espacoEscolhido,
            dataEvento,
            publico,
            tipoEvento,
            outrosServicos,
            orcamento,
            duvida
        );

        res.status(200).json({message: "Success"})

    } catch (err) {
        console.log(err);
        res.status(500).end();
    }
}