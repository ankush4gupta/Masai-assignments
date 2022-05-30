import { GetCITY } from "./action";
const init = { cities: undefined };
export const CityReducer = (store = init, { type, payload }) => {
    switch (type) {
        case GetCITY:
            return {
                ...store, cities: payload
            }
            default : return store
    }
}