export default function createReportObject(employeesList) {

    let allEmployees = [...employeesList];
    let getNumberOfDepartments = () => {
        return Object.keys(allEmployees).length;
    }
    return {
        allEmployees,
        getNumberOfDepartments
    };


}