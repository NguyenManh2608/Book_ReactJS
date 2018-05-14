import React, {Component} from 'react';
import axios from 'axios';
import {Col, Row, Table} from 'reactstrap';
import {connect} from 'react-redux';
import {loadBook} from "../redux/Actions";
import PopoverComponent from "./PopoverComponent";
import ButtonComponent from "./actionBook/ButtonComponent";

const mapDispatchToProps = dispatch => {
  return {
      loadBook: () => {
          dispatch(loadBook());
      },
  }
};

const mapStateToProps = state => {

    return {
        books: state.bookReducer
    }
};

class TableComponent extends Component {
   constructor(props) {
       super(props);
       this.state = {
           publisherName:'',
           book:[],
           popoverOpen: false,
       }
   }

   componentWillMount() {
        this.props.loadBook();
   }


   showBook(id){
        axios.get('/book/'+id)
            .then(res => {
                let book = res.data[0];
               this.setState({book: book, publisherName: book.publisher.name});
            });
   }

   toggle() {
       this.setState({
            popoverOpen: !this.state.popoverOpen
        });
   }

    render() {
        this.props.loadBook();
        return(

            <Table striped>

                <thead>
                <tr>
                    <th scope="row">Id</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Publisher</th>
                    <th>Price</th>
                    <th>
                        <Row>
                            <Col xs="6">Action</Col>
                        </Row>
                    </th>
                </tr>
                </thead>
                <tbody>
                {this.props.books.map(book =>
                    <tr key={book.id}>
                        <td>{book.id}</td>
                        <td><a id="Popover" onClick={() => {
                            this.showBook(book.id);
                            this.toggle();
                        }}>{book.title}</a></td>
                        <PopoverComponent publisherName={this.state.publisherName} book={this.state.book} isOpen={this.state.popoverOpen} target={'Popover'} toggle={this.toggle.bind(this)}/>
                        <td>{book.author}</td>
                        <td>{book.publisher.name}</td>
                        <td>{book.price}</td>
                        <td>
                             <ButtonComponent id={book.id}/>
                        </td>
                    </tr>
                )}
                </tbody>
            </Table>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)