import Employee from './Employee';

const employeeListStyles = {
    wrapper: {
        width: '30%',
        fontSize: 20,
        border: '1px solid black',
    },
    title: {
        textAlign: 'center',
    },
    list: {
        listStyle: 'none',
        padding: 0,
        textAlign: 'center',
    }
}

function EmployeeList({employees, handleClick}) {

    const employeeList = employees.map(employee => <Employee key={employee.id}
                                                    employeeData={employee} handleClick={handleClick}/>);

    return (
        <div style={employeeListStyles.wrapper}>
            <h2 style={employeeListStyles.title}>Lista pracowników:</h2>
            <ul style={employeeListStyles.list}>
                {employeeList}
            </ul>
        </div>
    );
}

export default EmployeeList;
