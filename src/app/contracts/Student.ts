import { Course } from "./Course";
import { Note } from "./Note";

export class Student {
    id : string;
    nameSurname : string;
    email : string;
    telephoneNumber : string;
    notes : Note[];
    courses : Course[];
    address : string;
    imageUrl : string;
}