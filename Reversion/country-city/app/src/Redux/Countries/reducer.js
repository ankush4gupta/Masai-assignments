import { GETCOUNTRY } from "./action";
const init = { countries: undefined };
export const CountryReducer = (store = init, { type, payload }) => {
    switch (type) {
        case GETCOUNTRY:
            return {
                ...store, countries: payload
            }
        default: return store
    }
}