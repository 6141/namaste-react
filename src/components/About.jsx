import React, { Component } from "react";
import { User } from "./User";

export class About extends Component {
  constructor(props){
    super(props)
  }

 componentDidMount(){
    
  }
  
  render() {
    return (
      <div>
        About us:
        <User name={"likhitha"} country={"India"} area={"warangal"} />
      </div>
    );
  }
}
