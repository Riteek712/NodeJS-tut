const data = {
    employees: require('../model/employee.json'),
    setEmployees : function (data) {this.employees = data}
}


const getAllEmployees = (req,res) =>{
    res.json(data.employees)
    
}

const createNewEmployee = (req,res)=>{
    const newEmployee = {
        id: data.employees[data.employees.length -1].id +1 ||1,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    }
    // In the next step we check if Firstname and lastname are provided and if not then send a message.
    if(!newEmployee.firstname || !newEmployee.lastname){
        return res.status(400).json({"message": "First and Last names are required!"})
    }
    // we update the Employee list by destructuring the current one and adding the newEmployee.
    data.setEmployees([...data.employees, newEmployee])
    res.status(201).json(data.employees)

};
const updateEmployee = (req,res)=>{
    const employee = data.employees.find( emp => emp.id === parseInt(req.body.id))

    if(req.body.firstname) employee.firstname = req.body.firstname;
    if(req.body.lastname) employee.lastname = req.body.lastname;

    const filteredArray = data.employees.filter(emp => emp.id ===parseInt(req.body.id))

    const unSortedArray = [...filteredArray, employee]

    data.setEmployees(unSortedArray.sort(
        (a,b)=>a.id > b.id?1:a.id <b.id ? -1: 0
    ))

    res.json(data.employees)

    

};
const deleteEmployee = (req,res)=>{
    const employee = data.employees.find( emp => emp.id === parseInt(req.body.id))
    if(!employee){
        return req.status(400).json({"message": `Employee ID ${req.body.id} not found!`})

    }

    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id))

    data.setEmployees([...filteredArray])
    res.json(data.employees)


};
const getEmployee = (req,res)=>{
    const employed  = data.employees.find(emp => emp.id === parseInt(req.params.id))
    if (!employed){
        return res.status(400).json({"message": `Employee ID ${req.params.id} not found!`})
    }
    res.json(employed)

}


module.exports = {
    getAllEmployees,
    createNewEmployee,
    updateEmployee,
    deleteEmployee,
    getEmployee
}