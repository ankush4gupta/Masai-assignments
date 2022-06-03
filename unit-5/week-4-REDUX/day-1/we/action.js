const ADDTODO = "ADD-TODO";
const TODO = "TODO";


const addTODO = (data) => {
    return {
        type: ADDTODO,
        payload: {
            title: title,
            state: false
        }

    }
}
export {
    ADDTODO, TODO, addTODO
}