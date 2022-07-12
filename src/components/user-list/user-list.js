import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import UserListItem from "../user-list-item";
import {compose} from '../../utils'
import {withApiService} from '../hoc';
import {usersLoaded, usersRequested} from '../../actions'

import './user-list.css';
import Spinner from "../spinner";

class UserList extends Component {

    componentDidMount() {
        //1. recive data
        const {apiService, usersRequested} = this.props;
        usersRequested();
        //асинхронный запрос
        apiService.getUsers().then((data) => {
            this.props.usersLoaded(data);
        });

        //асинхронный запрос
        // apiService.getUsers().then((data) => {
        //     this.props.usersLoaded(data);
        // });

        // const data = apiService.getUsers();
        // console.log(data);
        // //2. dispatch action to store
        // this.props.usersLoaded(data);
    }

    render() {
        const {users, loading} = this.props;
        if(loading){
            return <Spinner />;
        }
        return (
            <ul className="user-list">
                {
                    users.map((user) => {
                        return (
                            <li key={user.id}>
                                <UserListItem user={user}/>
                            </li>
                        )
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = ({users, loading}) => {
    return {users, loading};
};

//С использованием bindActionCreators и actionCreators
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        usersLoaded,
        usersRequested
    }, dispatch);
};

// Без использования action creators
// const mapDispatchToProps = (dispatch) => {
//     return {
//         usersLoaded: (newUsers)=>{
//             dispatch({
//                 type: 'USERS_LOADED',
//                 payload: newUsers
//             });
//         }
//     };
// };

// C использования action creators
// const mapDispatchToProps = (dispatch) => {
//     return {
//         usersLoaded: (newUsers)=>{
//             dispatch(usersLoaded(newUsers));
//         }
//     };
// };

//

//функцию mapDispatchToProps выше моэно сократить до такой
// const mapDispatchToProps = {
//     usersLoaded
// };


//С функцией compose
export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UserList);

//Без функции compose
// export default withApiService()(
//     connect(mapStateToProps, mapDispatchToProps)(UserList)
// );