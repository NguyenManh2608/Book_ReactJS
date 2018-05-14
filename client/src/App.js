import React, { Component } from 'react';
import TableComponent from "./component/TableComponent";
import SearchComponent from "./header-component/SearchComponent";
import {Container, Row, Col } from 'reactstrap';


export default class App extends Component {
  render() {
    return (
      <div className="App">
          <Container>
              <Row>
                  <Col sm="12" md={{ size: 8, offset: 2 }}>
                    <SearchComponent/>
                    <TableComponent/>
                  </Col>
              </Row>
          </Container>
      </div>
    );
  }
}

