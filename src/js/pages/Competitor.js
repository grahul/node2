import React from "react";
export default class Competitor extends React.Component {
	constructor() {
    	super()
	    this.state = {
	      fullName: 'Fisrt',
	      data :[1, 3, 2,8]
	    };

    }
  render() {
  var path =  this.props.location.pathname
  console.log('path', path);
    return (
      <div>
        <h1>Competitor</h1>

      </div>
    );
  }
}