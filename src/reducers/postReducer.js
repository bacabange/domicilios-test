const initialState = [];

const postReducer = (state = initialState, action) => {
    var newState = Object.assign({}, state);

    switch (action.type) {
        case 'GET_DATA':
            return newState;
        case 'GET_DATA_SUCCESS':
            return {
                ...newState,
                posts: action.response
            };
        case 'GET_DATA_FAILURE':
            return {
                ...newState,
                error: action.error.message
            };
        default:
            return state;
	}
};

export {
	postReducer
};

// import * as types from '../actions/types';
// import { objectUser, _newStore } from '../data/initialState';

// var initialUserInfo = _newStore(objectUser);

// const authReducer = (state = initialUserInfo, action) => {
//     var newState = Object.assign({}, state);
//     console.log( action)

//     switch (action.type) {
//         case types.AUTH_USER:
//             return newState;
//         case types.AUTH_USER_SUCCESS:
//             return {
//                 ...newState,
//                 user: action.response,
//                 isLogged: true
//             };
//         case types.AUTH_USER_FAILURE:
//             return {
//                 ...newState,
//                 isLogged: false,
//                 error: action.error.message
//             };
//         default:
//             return state;
// 	}
// };

// export {
// 	authReducer
// };