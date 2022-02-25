import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import DogButton from "./DogButton";
import "../App.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';



class DogCard extends Component {

  state = {
    showMessage: false,
  };

  onButtonClickHandler = () => {
   this.setState({showMessage: !this.state.showMessage});
  };

  render(){
    return(
      <Container>
        <Row xs={1} md={4}>

      {this.props.doggos.map((dog, i) =>

        <Card key={i} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={dog.image.url} />
          <Card.Body>
            <Card.Title>{dog.name}</Card.Title>
            <DogButton breedInformation={dog.temperament} />
          </Card.Body>
        </Card>

      )}
        </Row>
      </Container>
    )
  }
};


export default DogCard;
