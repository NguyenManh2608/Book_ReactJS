import React, {Component} from 'react';
import '../../App.css';
import ModalComponent from "../ModalComponent";

export default class ButtonEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            valueButton:'Edit'
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        return (
            <div>
                <button color="danger" onClick={this.toggle}>{this.state.valueButton}</button>
                <ModalComponent isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>{this.state.valueButton}</ModalComponent>
            </div>
        );
    }
}