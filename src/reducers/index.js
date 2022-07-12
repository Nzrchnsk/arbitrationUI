import {AiFillHome} from "react-icons/ai";
import {FaUserAlt, FaWrench} from "react-icons/fa";
import React from "react";

const initialState = {
    users: [],
    marketCurrentCourses: [],
    p2pCurrentCourses: [],
    loading: true,
    sidebar: true,
    balance: 10000,
    sidebarData: [
        {
            title: 'Home',
            path: '/',
            icon: <AiFillHome/>,
            className: 'nav-text'
        },
        {
            title: 'Users',
            path: '/users',
            icon: <FaUserAlt/>,
            className: 'nav-text'
        },
        // {
        //     title: 'Test',
        //     path: '/test',
        //     icon: <FaWrench/>,
        //     className: 'nav-text'
        // },
        
        {
            title: 'P2PTest',
            path: '/p2pTest',
            icon: <div/>,
            className: 'nav-text'
        },
        {
            title: 'MarketTest',
            path: '/marketTest',
            icon: <div/>,
            className: 'nav-text'
        },
    ],
};

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'USERS_LOADED':
            return {
                ...state,
                users: action.payload,
                loading: false,
            };
        case 'USERS_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'P2P_CURRENT_COURSES_LOADED':
            return {
                ...state,
                p2pCurrentCourses: action.payload,
                loading: false,
            };
        case 'P2P_CURRENT_COURSES_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'MARKET_CURRENT_COURSES_LOADED':
            return {
                ...state,
                marketCurrentCourses: action.payload,
                loading: false,
            };
        case 'MARKET_CURRENT_COURSES_REQUESTED':
            return {
                ...state,
                loading: true,
            };
        case 'TOGGLE_SIDEBAR':
            return {
                ...state,
                sidebar: !state.sidebar
            };
        case 'BALANCE_UPDATED':
            return {
                ...state,
                balance: action.payload,
            };

        default:
            return state;
    }

};

export default reducer;