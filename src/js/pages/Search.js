import React from "react";


export default class Search extends React.Component {

	
  render() {
    return (
    <div class="cebwidgetOLD" widget-name="SearchWidget"
   widget-type="SearchWidget" data-bind-version="2">
   <div class="widget-model">
      <div class="col-md-12">
         <div class="widgetStart">
            <div class="SearchWidget">
               <div class="col-md-offset-3 col-md-6">
                  <div class="panel panel-default">
                     <div class="panel-body">
                        <div class="panel-heading">Search</div>
                        <div class="panel-submenu">Companies</div>
                        <div class="input-group">
                           <input name="city" id="Companies" type="text"
                              class="form-control input-lg"
                              placeholder="Enter a Companies..." />
                        </div>
                        <div class="panel-submenu">Industries</div>
                        <div class="input-group">
                           <input name="Skill" id="Industries" type="text" class="form-control input-lg"
                              placeholder="Enter a Industries..." />
                        </div>
                        <div class="panel-bottomcnt">For any of the above, add a
                           minus sign "-" to the beginning of a term to filter it out of
                           your search
                        </div>
                        <div class="btn-group" role="group">
                           <button type="button" class="btn btn-default">More
                           filters</button>
                        </div>
                        <div class="btn-group  pull-right" role="group">
                           <button type="button"  class="btn btn-default btn-primary" widget-data-event="click::searchModule" id="searchBtn" onclick="myFunc();">Search</button>
                        </div>

                     </div>
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
