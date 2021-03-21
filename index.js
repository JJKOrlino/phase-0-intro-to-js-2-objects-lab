// Write your solution in this file!
const employee = {}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const nondestructive = {...employee};
    nondestructive[key] = value;
    return nondestructive
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}