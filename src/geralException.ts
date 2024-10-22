
import { Response } from "express";
import MessageErroPadraoRepresentation, { ObservacoesMessagemErro } from "./representation/MessageErroRepresentation";
export default abstract class GeneralException extends Error{

    status: number = 200;
    observacoes: ObservacoesMessagemErro[] = [];
    resolve(res: Response<MessageErroPadraoRepresentation> ){
        if (this.observacoes?.length === 0)
          res.status(this.status).json({message: this.message});
        else {
          res.status(this.status).json({message: this.message, observacoes: this.observacoes});
        }
    }

    addObservacoes(observacao: ObservacoesMessagemErro){
      this.observacoes.push(observacao);
    }
}
