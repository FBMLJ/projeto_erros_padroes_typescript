import GeneralException from "./geralException";

export default class BadRequest extends GeneralException{
  status: number = 400;
  message: string= "A requisição apresenta problemas, favor verificar";

  throwIfErros(){
    if (this.observacoes.length > 0){
      throw this;
    }
  }

}
