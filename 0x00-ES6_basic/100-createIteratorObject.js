export default function createIteratorObject(report) {
    
    return {
        * [Symbol.iterator]() {
            for (const key in report.allEmployees) {
                yield report.allEmployees[key];
            }
        }
    };
     

}