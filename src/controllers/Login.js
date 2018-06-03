import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col, 
    InputGroup, 
    InputGroupAddon, 
    Input,
    Button
} from 'reactstrap';
import '../css/Style.css';
import '../css/FormStyles.css';

import api from '../lib/Api.js';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }

    usernameDidChanged(e) {
        this.setState({ username: e.target.value });
    }

    passwordDidChanged(e) {
        this.setState({ password: e.target.value });
    }

    login() {

        return window.location.href = '#/dashboard'

        let username = this.state.username || '';
        let password = this.state.password || '';

        if (username.length > 0 && password.length > 0) {
            let params = { username: username, password: password }
            console.log('params: ', params);

            api.post('user/login', params,
            res => {
                console.log('res: ', res.data);
            },
            err => {
                console.log('error: ', err.response);
            });
        }else{
            console.log('missing params');
        }
    }

    render() {
        return (
            <div className="main">
                <Container fluid>
                    <br /><br />
                    <br /><br />
                    <Row>
                        <Col sm="4"/>
                        <Col sm="4">
                            <Row>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend"> </InputGroupAddon>
                                    <Input placeholder="username" onChange={this.usernameDidChanged.bind(this)} value={this.state.username} />
                                </InputGroup>
                            </Row>
                            <br />
                            <Row>
                                <InputGroup size="lg">
                                    <InputGroupAddon addonType="prepend"> </InputGroupAddon>
                                    <Input type="password" placeholder="password" onChange={this.passwordDidChanged.bind(this)} value={this.state.password} />
                                </InputGroup>
                            </Row>
                            <br />
                            <Row>
                                <Col sm="3"/>
                                <Col sm="6">
                                    <Button className="button" onClick={this.login.bind(this)}>Login</Button>
                                </Col>
                                <Col sm="3"/>
                            </Row>
                            <br />
                            <Row>
                                <Col sm="3"/>
                                <Col sm="6">
                                    <Button className="button">Register</Button>
                                </Col>
                                <Col sm="3"/>
                            </Row>
                        </Col>
                        <Col sm="4"/>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;