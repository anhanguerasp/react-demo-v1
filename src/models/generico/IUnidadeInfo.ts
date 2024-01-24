export interface INucleo {
  titulo: string;
  endereco: string;
  telefone: string;
}

export interface IUnidade {
  unidade: string;
  endereco?: string;
  telefone?: string;
  nucleos?: Array<INucleo>;
}
