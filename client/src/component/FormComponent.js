import React, {Component} from 'react';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {addBook, getPublishers} from "../redux/Actions";
import {connect} from 'react-redux';


const mapDispatchToProps = dispatch => {
    return {
        addBook: (book) => {
            dispatch(addBook(book))
        },
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


class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            book: [],
            Title: '',
            Author: '',
            PublisherId: null,
            Price: null,
        };
    }

    componentDidMount() {
        this.props.loadPublisher();
    }


    add(event) {
        event.preventDefault();
        let book = {
            title : this.state.Title,
            author: this.state.Author,
            publisher_id: this.state.PublisherId,
            price: this.state.Price
        };
        this.props.addBook(book);
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
            <Form onChange={this.updateData.bind(this)}  onSubmit={this.add.bind(this)}>
                <FormGroup row>
                    <Label for="Title" sm={2}>Title</Label>
                    <Col sm={10}>
                        <Input name="Title" id="Title" placeholder="Title placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="Author" sm={2}>Author</Label>
                    <Col sm={10}>
                        <Input name="Author" id="Author" placeholder="Author placeholder" />
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
export default connect(mapStateToProps,mapDispatchToProps)(FormComponent)