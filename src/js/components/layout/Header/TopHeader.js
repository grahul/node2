import React from "react";


export default class TopHeader extends React.Component {

	constructor(){
			super();
			this.state = {
		      topMenu:[
				        {
				          "name": "Workbench",
				          "path": "workbench"
				        },
				        {
				          "name": "Insights",
				          "path": "insights"
				        }, 
				        {
				          "name": "Research vault",
				          "path": "Research-vault"
				        }
				      ]
		    };
	} 

	mainMenu (value,key){
		return (<span key={key} class="col-sm-4"><b><a href="{value.path}">{value.name}</a></b></span>)
	}
	
  render() {
  	 var items = 'this.props.items.map(this.generateItem)';
    return (
			 <div id="TopnavWidget">
			   <div class="cebwidgetNew">
			      <header class="clearfix player-header">
			         <div class="topnav">
			            <div class="innercnt">
			               <div class="row topmar">
			                  <div class="col-sm-4"><b>TalentNeuron</b></div>
			                  <div class="col-sm-4" id="myNavbar">
			                     <div class="row">            
				                    {this.state.topMenu.map(this.mainMenu)}
			                     </div>
			                  </div>
			               </div>
			            </div>
			         </div>
			      </header>
			   </div>
			</div>
    );
  }
}
