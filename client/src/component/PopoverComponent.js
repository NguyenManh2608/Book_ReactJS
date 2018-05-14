import React, {Component} from 'react';
import { Popover, PopoverHeader, PopoverBody} from 'reactstrap';

export default class PopoverComponent extends Component {

    render() {
        return (
            <Popover isOpen={this.props.isOpen} target="Popover" toggle={this.props.toggle}>
                <PopoverHeader> Title:{this.props.book.title}</PopoverHeader>
                <PopoverBody>
                    Author: {this.props.book.author} <br/>
                    Publisher: {this.props.publisherName}<br/>
                    price: {this.props.book.price}
                </PopoverBody>
            </Popover>
        );
    }
}