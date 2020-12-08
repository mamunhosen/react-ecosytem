import {
  CREATE_TODO,
  REMOVE_TODO,
  COMPLETE_TODO,
  LOAD_TODOS_IN_FAILURE,
  LOAD_TODOS_IN_SUCCESS,
  LOAD_TODOS_IN_PROGRESS,
} from "./actions";

export const isLoading = (state = false, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_TODOS_IN_PROGRESS:
      return true;
      break;
    case LOAD_TODOS_IN_SUCCESS:
    case LOAD_TODOS_IN_FAILURE:
      return false;
      break;
    default:
      return state;
      break;
  }
};

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return [...state, todo];
    }
    case REMOVE_TODO: {
      const { todo: todoToRemove } = payload;
      return state.filter((todo) => todo.id !== todoToRemove.id);
    }
    case COMPLETE_TODO: {
      const { updatedTodo } = payload;
      return state.map((todo) => {
        if (todo.id === updatedTodo.id) {
          return { ...todo, isCompleted: true };
        }
        return todo;
      });
    }
    case LOAD_TODOS_IN_SUCCESS: {
      const { todos } = payload;
      return todos;
    }
    case LOAD_TODOS_IN_PROGRESS:
    case LOAD_TODOS_IN_FAILURE:
    default:
      return state;
      break;
  }
};
