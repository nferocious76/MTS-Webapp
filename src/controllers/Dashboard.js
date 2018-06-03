import React, { Component } from 'react';
import { 
    Container, 
    Row, 
    Col,
    Input,
    Button
} from 'reactstrap';
import '../css/Style.css';
import '../css/FormStyles.css';
import logo from '../logo.svg';
import '../css/App.css';

class Dashboard extends Component {

    render() {

        return (
            <div className="App">
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>MTS Dashboard</h2>
                </div>
                {/* <Container fluid>
                    <Row>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                </Container> */}
            </div>
        );
    }

}

export default Dashboard;