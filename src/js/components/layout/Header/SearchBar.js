import React from "react";


export default class SearchBar extends React.Component {

	
  render() {
    return (
		<div class="container-fluid hrline">
          <div class="placeholderplugin">
          <div class="innercnt">
            <div class="row">
              <div class="col-xs-10">
                <div class="left margintop4">Search query:</div>
                <div id="SelectorpluginWidget"></div>
              </div>
              <div class="col-xs-2">
                <div class="row">
                  <div class="col-xs-6 borderleft1">
                    <button type="button" class="btn btn-default">Edit</button>
                  </div>
                  <div class="col-xs-6">
                    <button type="button" class="btn btn-default">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
  }
}
