const employeeDetailsStyles = {
    display: 'flex',
    flexDirection: 'column',
    width: '60%',
    border: '1px solid black',
    padding: 10,
}

function EmployeeDetails({employee}) {
    const {name, surname, age, position} = employee;
    return (
        <div style={employeeDetailsStyles}>
            <h2>Dane szczegółowe pracownika:</h2>
            <div>
                <p>Imię: {name}</p>
            </div>
            <div>
                <p>Nazwisko: {surname}</p>
            </div>
            <div>
                <p>Wiek: {age}</p>
            </div>
            <div>
                <p>Stanowisko: {position}</p>
            </div>
        </div>);
}

export default EmployeeDetails;
