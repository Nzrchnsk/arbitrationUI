// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from "redux";
//
// import P2PCurrentCourseListItem from "../p2p-current-course-list-item";
// import {compose} from '../../utils'
// import {withApiService} from '../hoc';
// import Table from 'react-bootstrap/Table';
// import {p2pCurrentCoursesLoaded, p2pCurrentCoursesRequested} from '../../actions'
//
// import './p2p-current-course-list.css';
// import Spinner from "../spinner";
//
// class P2PCurrentCourseTable extends Component {
//
//     componentDidMount() {
//         //1. recive data
//         const {apiService, p2pCurrentCoursesRequested} = this.props;
//         p2pCurrentCoursesRequested();
//         //асинхронный запрос
//         apiService.getAllP2PCurrentCourses().then((data) => {
//             this.props.p2pCurrentCoursesLoaded(data);
//         });
//     }
//
//     render() {
//         const {p2pCurrentCourses, loading} = this.props;
//         if (loading) {
//             return <Spinner/>;
//         }
//         return (
//             <Table responsive className="p2p-current-courses-table">
//                 <thead>
//                 <tr>
//                     <th>#</th>
//                     <th></th>
//                     <th>Last Name</th>
//                     <th>Username</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//
//                 {
//                     p2pCurrentCourses.map((p2pCurrentCourse) => {
//                         return (
//                             <tr>
//                                 <td>1</td>
//                                 <td>Mark</td>
//                                 <td>Otto</td>
//                                 <td>@mdo</td>
//                             </tr>
//                         )
//                     })
//                 }
//                 </tbody>
//
//
//             </Table>
//         );
//     }
// }
//
// const mapStateToProps = ({p2pCurrentCourses, loading}) => {
//     return {p2pCurrentCourses, loading};
// };
//
// //С использованием bindActionCreators и actionCreators
// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({
//         p2pCurrentCoursesLoaded,
//         p2pCurrentCoursesRequested
//     }, dispatch);
// };
//
// //С функцией compose
// export default compose(
//     withApiService(),
//     connect(mapStateToProps, mapDispatchToProps)
// )(P2PCurrentCourseTable);
