import React from 'react';

import './user-list-item.css';

const UserListItem = ({user}) => {
    const {id, email, name} = user;
    return (<div className="user-list-item">
        <div className="user-cover">

        </div>
        <div className="user-details">

        </div>
        {/*TODO:поменять ид на ссылку*/}
        {/*<a href="#" className="user-id">{id}</a>*/}
        <span className="user-id">{id}</span>
        <div className="user-email">{email}</div>
        <div className="user-name">{name}</div>
    </div>);
};

export default UserListItem;