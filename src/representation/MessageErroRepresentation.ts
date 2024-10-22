export interface ObservacoesMessagemErro{
  descricao: string,
  label?: string,
  t(): void 
}

export default interface MessageErroPadraoRepresentation {
    message: string,
    observacoes?: ObservacoesMessagemErro[];
}
