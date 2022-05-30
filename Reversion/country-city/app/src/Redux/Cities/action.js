import axios  from "axios";
export const GetCITY = "GetCITY";
export const getcity = (data)=>{
    return {
        type : GetCITY,
        payload : data
    }
}

export const getcitydata = ()=>async(dispatch)=>{
    let data = axios.get(`http://localhost:8080/cities`);
    // console.log(data.data)
    dispatch(getcity(data.data))
}