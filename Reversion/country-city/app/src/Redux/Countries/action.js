import axios from "axios";
export const GETCOUNTRY =  "GETCOUNTRY";

const getcountry = (data)=>{
    return {
        type : GETCOUNTRY,
        payload : data
    }
}

export const getcountrydata = () => async (dispatch) => {
    let data = axios.get(` http://localhost:8080/country`);
    console.log(data.data,"count")
    dispatch(getcountry(data.data))
}