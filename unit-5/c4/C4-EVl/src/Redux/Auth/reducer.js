const init = {
    Auth: false, user: {
        username: null,
        role: null
    }
};
import { LOGIN, LOGOUT } from "./action"
import { USER } from "./action"

export const Authreducer = (store = init, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return {
                ...store, Auth: payload
            }
        case LOGOUT:
            return {
                ...store, Auth: payload
            }
        case USER:
            return {
                ...store, user: payload
            }

        default:
            return store;
    }
};