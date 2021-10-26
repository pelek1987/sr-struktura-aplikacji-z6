import {useRef} from "react";

const employeeStyles = {
    width: '60%',
    border: '1px solid black',
    margin: '10px auto',
    padding: 5,

    link: {
        display: 'block',
        height: '100%',
        textDecoration: 'none',
        color: '#000',
    }
}

function Employee({employeeData, handleClick}) {
    const liRef = useRef();
    const {name, surname, id} = employeeData;
    return (
        <li style={employeeStyles} ref={liRef} data-id={id} onClick={(e) => handleClick(e, liRef.current.dataset.id)}>
            <a style={employeeStyles.link} href="#">{name} {surname}</a>
        </li>
    );
};

export default Employee;
