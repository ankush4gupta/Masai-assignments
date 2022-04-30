// action 
export const ADD_TODO = "ADD_TODO";
export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}
export const getdata =()=>async(dispatch)=>{
    const data = await fetch(`http://localhost:8080/todos`).then((res) => res.json())
    dispatch(addTodo(data))
}