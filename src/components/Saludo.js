import { Component } from "react";

class Saludo extends Component {
    render() {
        return (
            <p>Hola {this.props.nombre}</p>
        );
    }
}

export default Saludo;