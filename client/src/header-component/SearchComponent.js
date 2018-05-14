import React, {Component} from 'react';
import {Input, Row, Col} from 'reactstrap';
import AddComponent from "./AddComponent";
import FaIconPack from 'react-icons/lib/fa/cc-visa'
export default class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueButton:'Add'
        };
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="6" sm="4"><h1><FaIconPack /> My Book</h1></Col>
                    <Col xs="6" sm="4"><h1><Input placeholder='Search'/></h1></Col>
                    <Col sm="4"><h1><AddComponent>{this.state.valueButton}</AddComponent></h1></Col>
                </Row>
            </div>
        );
    }
}