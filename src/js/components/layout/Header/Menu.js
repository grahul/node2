import React from "react";
import { IndexLink, Link } from "react-router";


export default class BottomHeader extends React.Component {
  constructor() {
    super()

    this.state = {
      collapsed: true,
      subMenu:[
				        {
				          "name": "Location",
				          "path": "location"
				        },
				        {
				          "name": "Competitor",
				          "path": "competitor"
				        }, 
				        {
				          "name": "School",
				          "path": "school"
				        },
				        {
				          "name": "Diversity",
				          "path": "diversity"
				        },
				        {
				          "name": "Custom",
				          "path": "custom"
				        },
				        {
				          "name": "Usage",
				          "path": "usage"
				        }
				      ]
		    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    console.log('collapsed', collapsed);
    // this.setState({collapsed});
  }
    subMenu (value,key){
		
		return (<li key={key}><Link to={value.path} >{value.name}</Link></li>);
	}


  render() {
  	const { location } = this.props;
    const { collapsed } = this.state;
    // const featuredClass = location.pathname === "/" ? "active" : "";
    // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";
    return (
      <div class="hrline">
	   <div class="innercnt" id="HeaderWidget">
	      <div class="cebwidgetNew">
	         <div class="widget-model">
	            <header class="clearfix player-header">
	               <nav class="navbar navbar-default navbar-offcanvas navbar-offcanvas-touch navbar-offcanvas-fade" role="navigation" id="js-bootstrap-offcanvas">
	                  <div class="row">
	                     <div class="container-fluid">
	                        <div class="navbar-header col-sm-3"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button><a class="navbar-brand" href="/"><span class="brand">Plan</span></a></div>
	                        <div class="collapse navbar-collapse col-sm-9" id="myNavbar">
	                           <ul class="nav navbar-nav">
	                           		{this.state.subMenu.map(this.subMenu)}
	                           </ul>
	                        </div>
	                     </div>
	                  </div>
	               </nav>
	            </header>
	         </div>
	      </div>
	   </div>
	</div>
    );
  }
}
