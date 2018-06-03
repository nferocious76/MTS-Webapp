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

import api from '../lib/Api.js';

class MovieList extends Component {

    render() {

        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                        </Col>
                        <Col sm="4">
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default MovieList;