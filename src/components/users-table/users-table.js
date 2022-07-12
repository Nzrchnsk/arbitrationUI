import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";


import {MdModeEdit} from "react-icons/md";
import {RiDeleteBin2Fill} from "react-icons/ri";

import {compose} from '../../utils'
import {withApiService} from '../hoc';
import {usersLoaded, usersRequested} from '../../actions'

import './users-table.css';
import Spinner from "../spinner";
import {Link} from "react-router-dom";

class UsersTable extends Component {

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
        if (loading) {
            return <Spinner/>;
        }
        return (
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">id</th>
                    <th scope="col">email</th>
                    <th scope="col">name</th>
                    <th scope="col">actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    users.map((user, index) => {
                        return (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.name}</td>
                                <td>
                                    <Link to="#" className="item-action">
                                        <MdModeEdit/>
                                    </Link>
                                    <Link to="#" className="item-action">
                                        <RiDeleteBin2Fill/>
                                    </Link>

                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
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
)(UsersTable);

//Без функции compose
// export default withApiService()(
//     connect(mapStateToProps, mapDispatchToProps)(UserList)
// );