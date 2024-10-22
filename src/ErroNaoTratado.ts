import GeneralException from "./geralException";
import ObservacoesMessagemErro from "./representation/MessageErroRepresentation";

export default class ErroNaoTratado extends GeneralException implements ObservacoesMessagemErro{
    status: number= 500;
    message: string = "Algo inesperado aconteceu, por favor entrar em contato com a equipe de suporte";
} 