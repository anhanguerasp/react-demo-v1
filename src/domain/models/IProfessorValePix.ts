import { IMatricula } from "./IMatricula";

export interface IProfessor extends IMatricula {
  nomeprof: string;
  telefoneprof: string;
  emailprof: string;
  CPFQuemIndicou?: string;
}
