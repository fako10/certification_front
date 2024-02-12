import { Question } from "./Question.model";

export class UserExamen {

    id?: any;
    idUser?: Int16Array;
    libelleCertification?: string;
    libelleExamen?: string;
    duree?: Int16Array;
    idExamen?: Int16Array;
    dateExamen?: Date;
    questions?: Array<Question>;
    nbrQuestions?: Int16Array;
    nbrQuestionsCorrectes?: Int16Array ;
    resultat?: boolean;
    pourcentage?: number;
}
