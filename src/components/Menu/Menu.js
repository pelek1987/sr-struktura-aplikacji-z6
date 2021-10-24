import Logo from "../Logo";

const styles = {
    container: {
        position: 'fixed',
        top: 0,
        left: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100px',
        backgroundColor: 'grey',
    },

    list: {
        listStyleType: 'none',
        width: '100%',
        marginTop: 30,
        padding: 0
    },

}


function Menu({ children }) {
    return (
        <div style={styles.container}>
            <Logo>
                Logo
            </Logo>
            <ul style={styles.list}>
                { children }
            </ul>
        </div>
    );
}

export default Menu;
