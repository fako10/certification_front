import { Reponse } from "./Reponse.model";

export class Question {
    id?: any;
    intitule?: string;
    description?: string;
    examen?: Int16Array;
    reponses?: Array<Reponse>;
}