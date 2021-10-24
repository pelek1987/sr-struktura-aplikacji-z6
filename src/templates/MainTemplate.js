const styles = {
    paddingLeft: 110,
}

function MainTemplate({ children }) {
    return (
        <div style={styles}>
            { children }
        </div>
    );
}

export default MainTemplate;
