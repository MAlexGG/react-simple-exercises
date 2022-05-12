import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Lamp from '../components/lamp';

class Class extends Component {
    render() {
        return (
            <div className='ct-class'>
                <h2>CICLO DE VIDA DE LOS COMPONENTES DE CLASE EN REACT.JS</h2>
                <Link to="/func" className='nav-class'>FUNCTIONAL COMPONENT</Link>
                <ul className='ul-home'>
                    <li><b>Mounting:</b> el componente insertará contenido en el DOM</li>
                    <ol>
                        <li>constructor()</li>
                        <li>render()</li>
                        <li>componentDidMount()</li>
                    </ol>
                    <li><b>Updating:</b> cuando se actualiza (cambia de estado)</li>
                    <ol>
                        <li>render()</li>
                        <li>componentDidUpdate()</li>
                    </ol>
                    <li><b>Unmounting:</b> se elimina del DOM</li>
                    <ol>
                        <li>componentWillUnmount()</li>
                    </ol>
                </ul>
                <h2>PROPIEDADES DE INSTANCIA</h2>
                <ul className='ul-home'>
                    <li><b>Props: </b>this.props</li>
                    <li><b>State: </b>this.state</li>
                </ul>
                <hr />
                <Lamp/>
            </div>
        );
    }
}

export default Class;

    
    
