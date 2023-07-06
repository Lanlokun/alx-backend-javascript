interface IStudent {
    name: string;
    age: number;
    location: string;

}

const student1: IStudent = {
    name: 'John',
    age: 23,
    location: 'USA'

}

const student2: IStudent = {
    name: 'Bob',
    age: 25,
    location: 'Canada'

}


const studentsList: Array<IStudent> = [student1, student2];


const table = document.createElement('table');
const thead = document.createElement('thead');
const tbody = document.createElement('tbody');
const trHead = document.createElement('tr');
const thName = document.createElement('th');
const thAge = document.createElement('th');
const thLocation = document.createElement('th');

thName.innerText = 'Name';
thAge.innerText = 'Age';
thLocation.innerText = 'Location';

trHead.appendChild(thName);
trHead.appendChild(thAge);
trHead.appendChild(thLocation);
thead.appendChild(trHead);
table.appendChild(thead);

studentsList.forEach((student) => {
    const trBody = document.createElement('tr');
    const tdName = document.createElement('td');
    const tdAge = document.createElement('td');
    const tdLocation = document.createElement('td');

    tdName.innerText = student.name;
    tdAge.innerText = student.age.toString();
    tdLocation.innerText = student.location;

    trBody.appendChild(tdName);
    trBody.appendChild(tdAge);
    trBody.appendChild(tdLocation);
    tbody.appendChild(trBody);
    table.appendChild(tbody);
}   
);


document.body.appendChild(table);

