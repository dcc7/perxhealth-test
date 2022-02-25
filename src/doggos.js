import React, { Component } from "react";
import axios from "axios";
import DoggoCard from "./components/DoggoCard";


const SERVER_URL = "https://api.thedogapi.com/v1/breeds";

class Doggos extends Component {

  constructor() {
    super();
    this.state = {
      doggos: []
    };
  };

  componentDidMount() {
    const fetchDoggos = () => {
      axios(SERVER_URL).then((response) => {
        const doggosObject = (response.data);
        this.setState({ doggos: doggosObject })
        // console.log(typeof doggosList);
        // console.log(doggosObject[0].name);
        // console.log(this.state.doggos);
      });
    };
    fetchDoggos();
  };

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="main-title">Doggos App</div>
            <DoggoCard doggos={this.state.doggos} />
          </div>
        </div>
      </div>
    )
  };
};

export default Doggos;
