import React, {Component} from 'react';
import {connect} from 'react-redux';
import {deleteBook} from "../../redux/Actions";


const mapStateToProps = state => {
    return {
        message: state
    }

};

const DispatchToProps = dispatch => {
    return {
        deleteBook: (id) => {
            dispatch(deleteBook(id));
        }
    }
};

class ButtonDelete extends Component {

    delBook(event) {
        event.preventDefault();
        this.props.deleteBook(this.props.id);
    }
    render() {
        return (
            <div>
                <button onClick={this.delBook.bind(this)}>Delete</button>
            </div>
        );
    }
}

export default connect(mapStateToProps, DispatchToProps)(ButtonDelete)
