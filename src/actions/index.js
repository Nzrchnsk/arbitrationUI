const usersLoaded = (newUsers) => {
    return {
        type: 'USERS_LOADED',
        payload: newUsers
    };
};
const usersRequested = () => {
    return {
        type: 'USERS_REQUESTED'
    };
};

const p2pCurrentCoursesLoaded = (newP2PCurrentCourses) => {
    return {
        type: 'P2P_CURRENT_COURSES_LOADED',
        payload: newP2PCurrentCourses
    };
};
const p2pCurrentCoursesRequested = () => {
    return {
        type: 'P2P_CURRENT_COURSES_REQUESTED'
    };
};

const marketCurrentCoursesLoaded = (newMarketCurrentCourses) => {
    return {
        type: 'MARKET_CURRENT_COURSES_LOADED',
        payload: newMarketCurrentCourses
    };
};
const marketCurrentCoursesRequested = () => {
    return {
        type: 'MARKET_CURRENT_COURSES_REQUESTED'
    };
};

const toggleSidebar = () => {
    return {
        type: 'TOGGLE_SIDEBAR'
    };
};

const balanceUpdated = (balance) => {
    console.log(balance);
    return {
        type: 'BALANCE_UPDATED',
        payload: balance
    };
};

export {
    usersLoaded,
    usersRequested,
    p2pCurrentCoursesLoaded,
    p2pCurrentCoursesRequested,
    marketCurrentCoursesLoaded,
    marketCurrentCoursesRequested,
    toggleSidebar,
    balanceUpdated,
};