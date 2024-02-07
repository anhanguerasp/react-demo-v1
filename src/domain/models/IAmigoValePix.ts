import { IMatricula } from "./IMatricula";

export interface IAmigoValePix extends IMatricula {
  nomealuno: string;
  ra: string;
  telefonealuno: string;
  emailaluno: string;
  pixaluno: string;
  CPFQuemIndicou?: string;
}
