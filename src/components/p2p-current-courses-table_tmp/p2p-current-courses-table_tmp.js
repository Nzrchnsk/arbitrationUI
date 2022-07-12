import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";


import {compose} from '../../utils'
import {withApiService} from '../hoc';
import {p2pCurrentCoursesLoaded, p2pCurrentCoursesRequested, balanceUpdated} from '../../actions'

import './p2p-current-courses-table_tmp.css';
import Spinner from "../spinner";
import P2PCurrentCourseTableItem from "../p2p-current-course-table-item";
import {Button, Dropdown} from "react-bootstrap";
import {FormSelect} from "react-bootstrap";

class P2PCurrentCoursesTableTmp extends Component {

    componentDidMount() {
        //1. recive data
        const {apiService, p2pCurrentCoursesRequested, balance} = this.props;
        p2pCurrentCoursesRequested();
        //асинхронный запрос
        apiService.getAllP2PCurrentCourses().then((data) => {
            this.props.p2pCurrentCoursesLoaded(data);
        });
        
    }

    render() {
        const coins = ['USDT', 'BTC', 'ETH', /*'BUSD', 'BNB', 'ETH', 'RUB', 'SHIB'*/];

        const {p2pCurrentCourses, loading} = this.props;
        // function(event){
        //     this.setState({value: event.target.value});
        
        if (loading) {
            return <Spinner/>;
        }
        return (
            <div className="flex-column flex-grow-1">
                <div className="d-inline-flex align-content-around col-12 mb-2 mt-2 p-2 flex-grow-1">
                  {/*  <div className="col-10 p-2">
                        <label>Баланс:</label>
                        <FormSelect value={this.props.balance} onChange={(event) => {   
                            this.props.balanceUpdated(event.target.value)
                            const {apiService, p2pCurrentCoursesRequested} = this.props;
                            p2pCurrentCoursesRequested();
                            //асинхронный запрос
                            apiService.getAllP2PCurrentCoursesWithBalance(event.target.value).then((data) => {
                                this.props.p2pCurrentCoursesLoaded(data);
                            });
                        }
                        
                        } className="ml-2">
                            <option>10000</option>
                            <option>30000</option>
                            <option>70000</option>
                            <option>100000</option>
                            <option>150000</option>
                        </FormSelect>
                    </div>*/}
                    <div className="col-2">
                        <Button className="">Обновить</Button>
                    </div>
                </div>
                <div className="flex-row col-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            {
                                coins.map(x => {
                                    return (
                                        <th>
                                            {x}
                                        </th>
                                    )
                                })
                            }
                            {/*<th>USDT</th>*/}
                            {/*<th>BTC</th>*/}
                            {/*<th>BUSD</th>*/}
                            {/*<th>BNB</th>*/}
                            {/*<th>ETH</th>*/}
                            {/*<th>RUB</th>*/}
                            {/*<th>SHIB</th>*/}
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Цена Tinkoff (опт)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'Tinkoff')
                                    return (
                                        <td>
                                            {course.wholesalePrice}
                                        </td>

                                        // wholesalePrice,
                                        //     retailPrice,
                                        //     coin,
                                        //     fiat,
                                        //     payType,
                                        //     exchange,
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена Tinkoff (розница)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'Tinkoff')
                                    return (
                                        <td>
                                            {course.retailPrice}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена РосБанк (опт)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'RosBank')
                                    if (x === 'BTC') {
                                        return (
                                            <td
                                                // bgcolor={'#ff4136'}
                                            >
                                                {course.wholesalePrice}
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td>
                                                {course.wholesalePrice}
                                            </td>
                                        )
                                    }
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена РосБанк (розница)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'RosBank')
                                    return (
                                        <td>
                                            {course.retailPrice}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена QIWI (опт)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'QIWI')
                                    if (x === 'USDT') {
                                        return (
                                            <td 
                                                // color={'#7CFC00'}
                                            >
                                                {course.wholesalePrice}
                                            </td>
                                        )
                                    } else {
                                        return (
                                            <td>
                                                {course.wholesalePrice}
                                            </td>
                                        )
                                    }
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена QIWI (розница)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'QIWI')
                                    return (
                                        <td>
                                            {course.retailPrice}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена YandexMoney (опт)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'YandexMoney')
                                    return (
                                        <td>
                                            {course.wholesalePrice}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена Advcash (розница)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'Advcash')
                                    return (
                                        <td>
                                            {course.retailPrice}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена Advcash (опт)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'Advcash')
                                    return (
                                        <td>
                                            {course.wholesalePrice}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Цена YandexMoney (розница)</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x && c.payType === 'YandexMoney')
                                    return (
                                        <td>
                                            {course.retailPrice}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>Фиат</td>
                            {
                                coins.map(x => {
                                    let course = p2pCurrentCourses.find(c => c.coin === x)
                                    return (
                                        <td>
                                            {course.fiat}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        {/*   <tr>
                    <td>Платежная система</td>
                    {
                        coins.map(x => {
                            let course = p2pCurrentCourses.find(c => c.coin === x)
                            return (
                                <td>
                                    {course.payType}
                                </td>
                            )
                        })
                    }
                </tr>*/}
                        {/*<tr>
                    <td>Биржа</td>
                    {
                        coins.map(x => {
                            let course = p2pCurrentCourses.find(c => c.coin === x)
                            return (
                                <td>
                                    {course.exchange}
                                </td>
                            )
                        })
                    }
                </tr>*/}

                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({p2pCurrentCourses, loading, balance}) => {
    return {p2pCurrentCourses, loading, balance};
};

//С использованием bindActionCreators и actionCreators
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        p2pCurrentCoursesLoaded,
        p2pCurrentCoursesRequested,
        balanceUpdated
    }, dispatch);
};

//С функцией compose
export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(P2PCurrentCoursesTableTmp);
