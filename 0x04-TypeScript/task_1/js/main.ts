interface ITeacher {
    firstName: string;
    lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

interface IDirectors extends ITeacher {
    numberOfReports: number;
}

interface IprintTeacherFunction {
    (firstName: string, lastName: string): string;
}


export default function printTeacher(firstName: string, lastName: string): string {
    return `${firstName.charAt(0)}. ${lastName}`;
}
