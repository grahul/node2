import React from "react";
import BreadCrumb from "./Header/BreadCrumb";
import Menu from "./Header/Menu";
import TopHeader from "./Header/TopHeader";
import SearchBar from "./Header/SearchBar";
import {
    IndexLink,
    Link
} from "react-router";
export default class Nav extends React.Component {
    constructor() {
        super()
        this.state = {
            collapsed: true,
        };
    }
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({
            collapsed
        });
    }
    render() {
        const {
            location
        } = this.props;
        const {
            collapsed
        } = this.state;
        // const featuredClass = location.pathname === "/" ? "active" : "";
        // const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
        // const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
        const navClass = collapsed ? "collapse" : "";
        return ( < div > < TopHeader / > < Menu / > < BreadCrumb / > < SearchBar / > < /div>);
    }
}