import React from "react";


export default class Featured extends React.Component {
  render() {
      var path =  this.props.location.pathname

      console.log('path', path);

    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
            Welcome TO default Page in ceb React
            </div>
          </div>
        </div>
        </div>
    );
  }
}
