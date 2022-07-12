import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";



import {compose} from '../../utils'
import {withApiService} from '../hoc';
import {p2pCurrentCoursesLoaded, p2pCurrentCoursesRequested} from '../../actions'

import './p2p-current-courses-table.css';
import Spinner from "../spinner";
import P2PCurrentCourseTableItem from "../p2p-current-course-table-item";

class P2PCurrentCoursesTable extends Component {

    componentDidMount() {
        //1. recive data
        const {apiService, p2pCurrentCoursesRequested} = this.props;
        p2pCurrentCoursesRequested();
        //асинхронный запрос
        apiService.getAllP2PCurrentCourses().then((data) => {
            this.props.p2pCurrentCoursesLoaded(data);
        });
    }

    render() {
        const {p2pCurrentCourses, loading} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Цена (опт)</th>
                    <th>Цена (розница)</th>
                    <th>Монета</th>
                    <th>Фиат</th>
                    <th>Платежная система</th>
                    <th>Биржа</th>
                </tr>
                </thead>
                <tbody>
                {
                    p2pCurrentCourses.map((p2pCurrentCourse, index) => {
                        return (
                          <P2PCurrentCourseTableItem p2pCurrentCourseId={index} p2pCurrentCourse={p2pCurrentCourse} />
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({p2pCurrentCourses, loading}) => {
    return {p2pCurrentCourses, loading};
};

//С использованием bindActionCreators и actionCreators
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        p2pCurrentCoursesLoaded,
        p2pCurrentCoursesRequested
    }, dispatch);
};

//С функцией compose
export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(P2PCurrentCoursesTable);
