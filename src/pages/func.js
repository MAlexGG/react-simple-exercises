import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Counter from '../components/counter';
import Accordion from '../components/accordion';

class Func extends Component {
    render() {
        return (
            <div className='ct-class'>
                <h2>CICLO DE VIDA DE LOS COMPONENTES FUNCIONALES EN REACT.JS</h2>
                <Link to="/" className='nav-class'>CLASS COMPONENT</Link>
                <ul className='ul-home'>
                    <li><b>Mounting:</b> el componente insertará contenido en el DOM</li>
                    <li><b>Updating:</b> cuando se actualiza (cambia de estado)</li>
                    <li><b>Unmounting:</b> se elimina del DOM</li>
                </ul>
                <h2>HOOKS</h2>
                <ul className='ul-home'>
                    <li><b>Incorporados: </b>useState, useEffect, useContext</li>
                    <li><b>Adicionales: </b>useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue</li>
                    <li><b>Personalizados</b></li>
                </ul>
                <hr />
                <h5>This is a counter:</h5>
                <Counter />
                <hr />
                <h5>This is an input:</h5>
                <Accordion />
                <hr />
                <h5>Reference:</h5>
                <a href="https://mauriciogc.medium.com/react-hooks-usestate-useeffect-usecontext-parte-i-f8cc8c9cce0f">React — Hooks [useState, useEffect, useContext](Parte I)</a>
                <br />
                <a href="https://mauriciogc.medium.com/react-hooks-usestate-useeffect-usecontext-parte-i-f8cc8c9cce0f">Entendiendo los Hooks de React, ¿Cómo usar useState y useEffect en nuestros componentes?</a>
            </div>
        );
    }
}

export default Func;