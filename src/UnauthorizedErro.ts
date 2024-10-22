import GeneralException from "./geralException";

export default class Unauthorized extends GeneralException {
  status: number = 401;
  message: string= "Erro usuário sem permissão para realizar a operação";
  static loginFail() : Unauthorized{
    const erro =  new Unauthorized();
    erro.message = "Falha ao realizar login, email ou senha incorretos";
    return erro;

  }
}
