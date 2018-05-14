import React, {Component} from 'react';
import {Button} from 'reactstrap';
import ModalComponent from "../component/ModalComponent";
import {connect} from "react-redux";
import {getPublishers} from "../redux/Actions";


const dispatchToProps = dispatch => {
    return {
        loadPublisher: () => {
            dispatch(getPublishers());
        }
    }
};

const mapStateToProps = state => {
    return {
        publishers: state.publisherReducer
    }
};

 class AddComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            valueButton:'Add'
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
                <Button onClick={this.toggle}>{this.props.children}</Button>
                <ModalComponent isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>{this.state.valueButton}</ModalComponent>
            </div>
        );
    }
}
export default connect(mapStateToProps, dispatchToProps)(AddComponent);