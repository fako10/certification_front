import {Reponse} from "./Reponse.model";

export class QuestionValidate {

  id?: any;
  intitule?: string;
  description?: string;
  examen?: Int16Array;
  reponses?: Array<Reponse>;
}
