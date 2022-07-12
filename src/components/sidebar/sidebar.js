import React, {Fragment, Component} from 'react';
import {Link} from "react-router-dom";
import {connect} from 'react-redux';

class Sidebar extends Component {


    render() {
        const { sidebarData } = this.props;
        return (
            <Fragment>{
                sidebarData.map((item, index) => {
                    return (
                        <li key={index} className={item.className}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        </li>
                    )
                })}
            </Fragment>
        );
    }
};

const mapStateToProps = ({sidebarData}) => {
    return { sidebarData };
};


export default connect(mapStateToProps)(Sidebar);