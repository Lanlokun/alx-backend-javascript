export default function createReportObject(employeesList) {

    let allEmployees = [...employeesList];
    let getNumberOfDepartments = (allEmployees) => {
        return Object.keys(allEmployees).length;
    }
    return {
        allEmployees,
        getNumberOfDepartments
    };


}