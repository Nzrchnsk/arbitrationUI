import React, {Fragment} from 'react';
import {Route, Switch} from 'react-router-dom';
import {HomePage, UsersPage, TestPage,P2PCurrentCoursePage, MarketCurrentCoursePage} from '../pages'

import {withApiService} from '../hoc';

import './app.css';
import Navbar from "../navbar/navbar";

const App = ({apiService}) => {
    // console.log(apiService.getUsers());
    return (
        <div>
            <Navbar/>
            <Switch>
                <main role='main' className='container'>
                    <Route path="/"
                           component={HomePage}
                           exact/>
                    <Route path="/users"
                           component={UsersPage}
                           exact/>
                    <Route path="/test"
                           component={TestPage}
                           exact/>                  
                    <Route path="/p2pTest"
                           component={P2PCurrentCoursePage}
                           exact/>   
                    <Route path="/marketTest"
                           component={MarketCurrentCoursePage}
                           exact/>
                </main>
            </Switch>

        </div>
    );

};

export default withApiService()(App);