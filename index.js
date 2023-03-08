// Write your solution in this file!
const employee = {
    name: "Jane",
    streetAddress: "123 Main St.",
};

function updateEmployeeWithKeyAndValue(empObj,key,value){
    const newObj = {...empObj};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(empObj,key,value){
    empObj[key] = value;
    return empObj;
}

function deleteFromEmployeeByKey(empObj,key,){
    const delObj = {...empObj};
    delete delObj[key];
    return delObj;
}

function destructivelyDeleteFromEmployeeByKey(empObj,key){
    delete employee[key];
    return empObj;
}
