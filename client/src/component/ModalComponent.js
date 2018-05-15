import React, {Component} from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import FormComponent from "./FormComponent";

export default class ModalComponent extends Component {

    render() {
        return (
            <Modal isOpen={this.props.isOpen} toggle={this.props.toggle} className={this.props.className}>
                <ModalHeader>{this.props.children} Book</ModalHeader>
                <ModalBody>
                    <FormComponent id={this.props.id} action={this.props.action}/>
                </ModalBody>
            </Modal>
        );
    }
}