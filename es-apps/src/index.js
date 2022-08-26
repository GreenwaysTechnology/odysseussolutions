function Employee() {
    //single variable
    this.id = 1;
}
let emp = new Employee();
console.dir(emp)
//add new property
emp.name ='Subramanian'
console.dir(emp)
//update existing property
// if prop exits update, else add.
emp.name = 'Ram'
emp.city ='Coimbatore'
emp.state ='Tamil Nadu'
console.dir(emp)
//delete existing property
delete emp.state
//iterate :
//loop - object loop
for (const key in emp) {
    //[] operator is used to get object keys
   console.log(key,emp[key])
}

