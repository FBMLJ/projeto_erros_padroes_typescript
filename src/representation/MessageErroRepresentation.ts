export interface ObservacoesMessagemErro{
  descricao: string,
  label?: string
}

export default interface MessageErroPadraoRepresentation {
    message: string,
    observacoes?: ObservacoesMessagemErro[];
}
