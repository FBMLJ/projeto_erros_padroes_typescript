export class GeneralMessageRepresentation{
    message: string="Messagem geral"
    constructor(message:string){
        this.message = message;
    }
}

export function getMessageNovoUsuarioRegistrado(){
    return new GeneralMessageRepresentation("Novo usuário registrado com sucesso");
}

export function getMessageUsuarioLogadoComSucesso(){
    return new GeneralMessageRepresentation("Usuário autenticado com sucesso");
}