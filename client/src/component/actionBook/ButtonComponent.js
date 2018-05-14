import React, {Component} from 'react';
import ButtonEdit from "./ButtonEdit";
import ButtonDelete from "./ButtonDelete";
import {Row, Col} from "reactstrap";

export default class ButtonComponent extends Component {
    render() {
        return (
            <Row>
                <Col xs="3"><ButtonEdit id={this.props.id}/></Col>
                <Col xs="3"><ButtonDelete id={this.props.id}/></Col>
            </Row>
        );
    }
}