import {useState} from "react";
import EmployeeList from "./EmployeeList";
import EmployeeDetails from "./EmployeeDetails";
import {employeesData} from "data/employeesData";
import {uid} from 'utils/uid';

const data = employeesData.map(employee => ({...employee, id: uid()}))

const employeesStyles = {
    display: 'flex',
    justifyContent: 'space-around',
}


function Employees() {
    const [employees] = useState(data);
    const [employee, setEmployee] = useState({
        name: '',
        surname: '',
        age: null,
        position: ''
    });
    const handleEmployeeClick = (e, id) => {
        const clickedEmployee = employees.find(employee => employee.id === id);
       setEmployee(clickedEmployee);
    }
    return (
        <div style={employeesStyles}>
            <EmployeeList employees={employees} handleClick={handleEmployeeClick} />
            <EmployeeDetails employee={employee} />
        </div>
    );
}

export default Employees;
