import { Question } from "./Question.model";

export class UserExamen {

    id?: any;
    idUser?: Int16Array;
    idExamen?: Int16Array;
    dateExamen?: Date;
    questions?: Array<Question>;

}