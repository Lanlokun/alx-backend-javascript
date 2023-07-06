export interface ITeacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

export interface IDirectors extends ITeacher {
    numberOfReports: number;
}

export interface IprintTeacherFunction {
    (firstName: string, lastName: string): string;
}


export function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}


export interface IStudentConstructor {
    new(firstName: string, lastName: string): IStudentClass;
}

export interface IStudentClass {
    firstName: string;
    lastName: string;
}


export class StudentClass implements IStudentClass {

    constructor(public firstName: string, public lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework() {
        return 'Currently working';
    }

    displayName() {
        return this.firstName;
    }
}







