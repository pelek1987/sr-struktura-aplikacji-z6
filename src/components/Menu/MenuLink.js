import { NavLink, Link } from "react-router-dom";

const styles = {
    listItem: {
        width: '100%',
        marginTop: 20,
    },
    link: {
        display: 'flex',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Tahoma, sans-serif',
        fontSize: 20,
        color: 'inherit',
    },
    // activeStyle: {
    //     fontWeight: 'bold',
    //     color: 'red'
    // }
}

function MenuLink({children, to, isActive, handleClick}) {
    return (
        <li  onClick={handleClick} style={styles.listItem}>
            {/*<NavLink activeStyle={styles.activeStyle} style={styles.link} exact to={to}>{children}</NavLink>*/}
            <Link style={{...styles.link, color: isActive ? 'red' : styles.link.color}} to={to}>{children}</Link>
        </li>
    );
};

export default MenuLink;
