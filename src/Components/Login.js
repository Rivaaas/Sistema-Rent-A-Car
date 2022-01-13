import React from 'react'
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const Form = styled.div`
    align-items: center;
    justify-content: center;
    align-content: center;
    display: flex;
    margin-top: 10rem;
    
`;

const Login = () => {
    return (
        <>
            <div>  
                <Form>
                    <h1>Inicio de sesion</h1>
                    <input type="text" name="user"/> <br/> <br/> 
                    <input type="password" name="pass"/>
                </Form>
            </div>
        </>
    )
}

export default Login
