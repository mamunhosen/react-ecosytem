export const CREATE_TODO = "CREATE_TODO"; //actions types
export const createTodo = (text) => ({ type: CREATE_TODO, payload: { text } }); // action creators

export const REMOVE_TODO = "REMOVE_TODO"; //actions types
export const removeTodo = (text) => ({ type: REMOVE_TODO, payload: { text } }); // action creators
