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

