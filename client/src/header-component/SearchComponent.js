import React, {Component} from 'react';
import {Input, Row, Col} from 'reactstrap';
import AddComponent from "./AddComponent";
import FaIconPack from 'react-icons/lib/md/account-balance'
import {connect} from 'react-redux';
import {searchKeyword} from "../redux/Actions";

const mapDispatchToProps = dispatch => {
    return {
        searchBook: (keyword) => {
            dispatch(searchKeyword(keyword));
        }
    }
};
const mapStateToProps = state => {
       return{
            books: state
       }
};
class SearchComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            valueButton:'Add',
            valueInput: ''
        };
    }

    searchKeyword(event){
        event.preventDefault();
        this.props.searchBook(this.state.valueInput);
    }

    onChange(str) {
        this.setState({valueInput:str})
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs="6" sm="4"><h1><FaIconPack /> My Book</h1></Col>
                    <Col xs="6" sm="4"><h1>
                        <form onSubmit={this.searchKeyword.bind(this)}>
                            <Input onChange={(e) => this.onChange(`${e.target.value}`)} placeholder='Search'/>
                        </form>
                    </h1></Col>
                    <Col sm="4"><h1><AddComponent>{this.state.valueButton}</AddComponent></h1></Col>
                </Row>
            </div>
        );
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(SearchComponent)