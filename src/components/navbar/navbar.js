import React, {Component, Fragment} from 'react';
import {Link} from "react-router-dom";
import {FaBars} from "react-icons/fa"
import {AiOutlineClose} from "react-icons/ai";
import Sidebar from "../sidebar";
import {IconContext} from "react-icons";
import {connect} from 'react-redux';


import './navbar.css';
import {bindActionCreators} from "redux";
import {toggleSidebar} from "../../actions";

class Navbar extends Component {
    render() {
        const {sidebar, toggleSidebar} = this.props;
        return (
            <Fragment>
                <IconContext.Provider value={{color: '#fff'}}>
                    <div className="navbar">
                        <Link to="#" className="menu-bars">
                            <FaBars onClick={toggleSidebar}/>
                        </Link>
                    </div>
                    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={toggleSidebar}>
                            <li className="navbar-toggle">
                                <Link to="#" className="menu-bars">
                                    <AiOutlineClose/>
                                </Link>
                            </li>
                            <Sidebar/>
                        </ul>
                    </nav>
                </IconContext.Provider>
            </Fragment>
        );
    }
};

const mapStateToProps = ({sidebar}) => {
    return {sidebar};
};

//С использованием bindActionCreators и actionCreators
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        toggleSidebar
    }, dispatch);
};


export default
    connect(mapStateToProps, mapDispatchToProps)(Navbar);