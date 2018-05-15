import React, {Component} from 'react';
import { Table } from 'semantic-ui-react'
import {connect} from 'react-redux';
import {loadBook} from "../redux/Actions";
import PopoverComponent from "./PopoverComponent";
import ButtonComponent from "./actionBook/ButtonComponent";
import {Col, Row} from "reactstrap";

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
           book:[
                   {
                       title: "learn cards",
                       author:"Twitter Fate",
                       publisher: {
                           id: 1,
                           name: "League of Legends",
                           address: "Garena",
                           phone: "0189885596"
                       },
                       price: 222
                   }
               ],
           popoverOpen: false,
       }
   }

   componentWillMount() {
        this.props.loadBook();
   }


   toggle() {
       this.setState({
            popoverOpen: !this.state.popoverOpen
        });
   }

    render() {
        // this.props.loadBook();
        return(

            <Table unstackable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell scope="row">Id</Table.HeaderCell>
                        <Table.HeaderCell>Title</Table.HeaderCell>
                        <Table.HeaderCell>Author</Table.HeaderCell>
                        <Table.HeaderCell>Publisher</Table.HeaderCell>
                        <Table.HeaderCell>Price</Table.HeaderCell>
                        <Table.HeaderCell>
                            <Row>
                                <Col xs="6">Action</Col>
                            </Row>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {this.props.books.map(book =>
                    <Table.Row key={book.id}>
                        <Table.Cell key={book.id}>{book.id}</Table.Cell>
                        <Table.Cell><a id="Popover" onClick={() => {
                            this.showBook(book.id);
                            this.toggle();
                        }}>{book.title}</a></Table.Cell>
                        <PopoverComponent publisherName={this.state.publisherName} book={this.state.book} isOpen={this.state.popoverOpen} target={'Popover'} toggle={this.toggle.bind(this)}/>
                        <Table.Cell>{book.author}</Table.Cell>
                        <Table.Cell>{book.publisher.name}</Table.Cell>
                        <Table.Cell>{book.price}</Table.Cell>
                        <Table.Cell textAlign='right'>
                             <ButtonComponent id={book.id}/>
                        </Table.Cell>
                    </Table.Row>
                )}
                </Table.Body>
            </Table>


        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TableComponent)