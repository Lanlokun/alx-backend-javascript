export default class HolbertonCourse{

    constructor(name, length, students){
        this._name = name;
        this._length = length;
        this._students = students;
        if (typeof name !== 'string'){
        throw TypeError('Name must be a string');
        }
        if (typeof length !== 'number'){
        throw TypeError('Length must be a number');
        }
        if (Array.isArray(students) === false){
        throw TypeError('Students must be an array');
        }
        for (let i = 0; i < students.length; i++){
        if (typeof students[i] !== 'string'){
            throw TypeError('Students must be an array of strings');
        }
        }
    }
    
    get name(){
        return this._name;
    }
    
    set name(newName){
        if (typeof newName !== 'string'){
        throw TypeError('Name must be a string');
        }
        this._name = newName;
    }
    
    get length(){
        return this._length;
    }
    
    set length(newLength){
        if (typeof newLength !== 'number'){
        throw TypeError('Length must be a number');
        }
        this._length = newLength;
    }
    
    get students(){
        return this._students;
    }
    
    set students(newStudents){
        if (Array.isArray(newStudents) === false){
        throw TypeError('Students must be an array');
        }
        for (let i = 0; i < newStudents.length; i++){
        if (typeof newStudents[i] !== 'string'){
            throw TypeError('Students must be an array of strings');
        }
        }
        this._students = newStudents;
    }
}
