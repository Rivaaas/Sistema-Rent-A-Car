import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Menu from './Menu';
import Cars from './Cars'

import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";



const Form = styled.div`
    
`;


const Login1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

`;

const Login = () => {
    return (
        <>

            <Login1>
                <Form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Usuario</label>
                        <input type="text" class="form-control" id="user" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </Form>


            </Login1>

            <Link to="/Cars">
                <button type="button">
                    Listado de autos
                </button> <br/>
                
            </Link>

            <Link to="/Menu">
            <button type="button">
                     Menu
                </button>
            </Link>

        </>


    )
}

export default Login
