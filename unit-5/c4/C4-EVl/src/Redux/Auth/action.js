// action types
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";



// Action Creators

export const login = (login) => {
    return {
        type: LOGIN,
        payload: login
    }
}
export const logout  = (logout) =>{
    return {
        type: LOGOUT,
        payload: logout
    }
}

// export const Userreducer = (store = init, { type, payload }) => {
//     switch (type) {
//         case USER:
//             return {
//                 ...store, user: payload
//             }
//         default: store
//     }
// };

// action types
export const USER = "USER";

// Action Creators
export const userdata = (data) => {
    return {
        type: USER,
        payload: data
    }
}