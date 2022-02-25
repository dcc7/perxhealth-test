import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../App.css"


class DogButton extends Component {

  state = {
    showMessage: false,
  };

  onButtonClickHandler = () => {
   this.setState({showMessage: !this.state.showMessage});
  };

  render(){
    return(
      <div>
        <Button onClick={this.onButtonClickHandler}>Breed Information</Button>
        {this.state.showMessage && <Card.Text>{this.props.breedInformation}</Card.Text>}
      </div>
    )
  }

};

export default DogButton;
