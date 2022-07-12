import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";


import {compose} from '../../utils'
import {withApiService} from '../hoc';
import {marketCurrentCoursesLoaded, marketCurrentCoursesRequested} from '../../actions'

import './market-current-courses-table.css';
import Spinner from "../spinner";

class MarketCurrentCoursesTable extends Component {

    componentDidMount() {
        //1. recive data
        const {apiService, marketCurrentCoursesRequested} = this.props;
        marketCurrentCoursesRequested();
        //асинхронный запрос
        apiService.getAllMarketCurrentCourses().then((data) => {
            this.props.marketCurrentCoursesLoaded(data);
        });
    }

    render() {
        const coins = ['USDT', 'BTC', 'ETH', /*'BUSD', 'BNB', 'ETH', 'RUB', 'SHIB'*/];

        const {marketCurrentCourses, loading} = this.props;
        if (loading) {
            return <Spinner/>;
        }
        return (
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
                </tr>
                </thead>
                <tbody>
                {

                    coins.map(firstCoin => {
                        return (
                            <tr>
                                <td>
                                    {firstCoin}
                                </td>
                                {
                                coins.map(secondCoin => {
                                    // return(<td>{0}</td>)
                                  /*  if(firstCoin === secondCoin)
                                        return (<td>0</td>)
                                    else 
                                        return (<td>
                                            {marketCurrentCourses.filter(mc => mc.firstCoin === firstCoin 
                                                && mc.secondCoin === secondCoin)}
                                            </td>)*/ 
                                      
                                    if(firstCoin === secondCoin)
                                        return (<td>{0}</td>)
                                    else {
                                        console.log(marketCurrentCourses.filter(mc => mc.firstCoin === firstCoin
                                            && mc.secondCoin === secondCoin))
                                        return (<td>
                                            {marketCurrentCourses.filter(mc => mc.firstCoin === firstCoin
                                                && mc.secondCoin === secondCoin)[0].price}
                                        </td>)
                                    }
                                })
                                }
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = ({marketCurrentCourses, loading}) => {
    return {marketCurrentCourses, loading};
};

//С использованием bindActionCreators и actionCreators
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        marketCurrentCoursesLoaded,
        marketCurrentCoursesRequested
    }, dispatch);
};

//С функцией compose
export default compose(
    withApiService(),
    connect(mapStateToProps, mapDispatchToProps)
)(MarketCurrentCoursesTable);
