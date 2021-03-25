import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import { Container }  from './styles.js'
import 'animate.css';
import authenticate from '../services/authenticate'  
import  login_handler from "../services/login_handler";

function Signin({history}) {
    window.document.title = "Login"
    const [data, setData] = useState({
        email:'',
        password:'',
    })

    async function signup(e) {
        e.preventDefault();

        let auth = await authenticate({
            signup: false,
            data,
        });
        login_handler(auth, history);
    }

    return (
        <Container>
            <div className="form animate__animated animate__bounceIn">
                <h3>Entre</h3>
                <br />
                <Form onSubmit={e => signup(e)}>
                    <Form.Group>
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control type="email" placeholder="Seu melhor E-mail" value={data.email} onChange={e=> setData({...data, email: e.target.value})}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="Sua senha" value={data.password} onChange={e=> setData({...data, password: e.target.value})}/>
                    </Form.Group>


                    <Button variant="success" type="submit">
                        Entrar
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default Signin;