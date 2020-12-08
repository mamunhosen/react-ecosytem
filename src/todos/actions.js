export const CREATE_TODO = "CREATE_TODO"; //actions types
export const createTodo = (todo) => ({ type: CREATE_TODO, payload: { todo } }); // action creators

export const REMOVE_TODO = "REMOVE_TODO"; //actions types
export const removeTodo = (todo) => ({ type: REMOVE_TODO, payload: { todo } }); // action creators

export const COMPLETE_TODO = "COMPLETE_TODO"; //actions types
export const completeTodo = (updatedTodo) => ({
  type: COMPLETE_TODO,
  payload: { updatedTodo },
});

export const LOAD_TODOS_IN_PROGRESS = "LOAD_TODOS_IN_PROGRESS"; //actions types
export const loadTodosInProgress = () => ({
  type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_IN_SUCCESS = "LOAD_TODOS_IN_SUCCESS"; //actions types
export const loadTodosInSuccess = (todos) => ({
  type: LOAD_TODOS_IN_SUCCESS,
  payload: { todos },
});

export const LOAD_TODOS_IN_FAILURE = "LOAD_TODOS_IN_FAILURE"; //actions types
export const loadTodosInFailure = () => ({
  type: LOAD_TODOS_IN_FAILURE,
});
