import { Component } from "react";

const styles = {
    button: {
        backgroundColor: '#384E8A',
        fontStyle: 'Helvetica Neue',
        color: 'white',
        padding: '15px 30px',
        border: 'none',
        borderRadius: '50%',
        cursor: 'pointer',
        width: '30%',
    }
}

class Button extends Component {
    render() {
        return (
            <button style={styles.button} {...this.props} />
        )
    }
}

export default Button;