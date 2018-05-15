import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addBook, editBook, getBook, getPublishers} from "../redux/Actions";
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => {
            dispatch(addBook(book))
        },
        loadPublisher: () => {
            dispatch(getPublishers());
        },
        editBook: (book) => {
            dispatch(editBook(book));
        },
        showBook: (id) => {
            dispatch(getBook(id));
        }
    }
};
const mapStateToProps = state => {
    return {
        publishers: state.publisherReducer,
        bookGet   : state.getBook
    }
};


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
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

            Title: '',
            Author: '',
            PublisherId: null,
            Price: null,

            title : "",
            author : "",
            publisher : null,
            price : null,
        };
    }

    componentDidMount() {
        this.props.loadPublisher();
        this.props.showBook(this.props.id);

    }



    submitForm(event) {
        event.preventDefault();
        if (this.props.action ==='add') {
            let book = {
                title : this.state.Title,
                author: this.state.Author,
                publisher_id: this.state.PublisherId,
                price: this.state.Price
            };
            this.props.addBook(book);
        } else if (this.props.action ==='Edit') {
            let book = {
                id: this.props.id,
                title : this.state.Title,
                author: this.state.Author,
                publisher_id: this.state.PublisherId,
                price: this.state.Price
            };
            this.props.editBook(book);
        } else {
            console.log("action not support");
        }
    }

    updateData(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onChange(str) {
        this.setState({PublisherId:str})
    }

    render() {
        return (
            <Form onChange={this.updateData.bind(this)}  onSubmit={this.submitForm.bind(this)}>
                <FormGroup row>
                    <Label for="Title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input name="Title" id="Title" placeholder={this.props.bookGet.map(book =>book.title)}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Author" sm={2}>Author</Label>
                    <Col sm={10}>
                        <Input name="Author" id="Author" placeholder={this.props.bookGet.map(book =>book.author)} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Publisher" sm={2}>Publisher</Label>
                    <Col sm={10}>
                        <Input type='select' onChange={(e) => this.onChange(`${e.target.value}`)} name='PublisherId' id="Publisher">
                            <option key={null} value={null}>none</option>
                           {this.props.publishers.map(publisher =>
                                <option key={publisher.id} value={publisher.id} >{publisher.name}</option>
                            )}
                        </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Price" sm={2}>Price</Label>
                    <Col sm={10}>
                        <Input type="number" name="Price" id="Price" />
                    </Col>
                </FormGroup>

                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button>Save</Button>
                    </Col>
                </FormGroup>
            </Form>
        );
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormComponent)