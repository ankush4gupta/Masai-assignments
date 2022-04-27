// // action type
// const ADD_TODO = "ADD_TODO";

// // action creators

// const addTodo = (title) => {
//     return {
//         type: ADD_TODO,
//         payload: {
//             title: title,
//             status: false,
//         },
//     };
// };

export const ADD_TODO = "ADD_TODO"
export const ADD_COUNT = "ADD_COUNT";
export const addCount = (data) => {
    return {
        type: ADD_COUNT,
        payload: data
    }
}
export const addTodo = (data) => {
    return {
        type: ADD_TODO,
        payload: data
    }
}
