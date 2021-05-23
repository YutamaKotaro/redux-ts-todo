import {CREATE_TODO, DELETE_TODO, UPDATE_TODO} from "./actionTypes";

interface State {
  title: string,
  text: string
}

export const createTodoAction = (userState: State ) => {
  return {
    type: 'CREATE_TODO',
    payload: {
      title: '',
      text: '',
    }
  }
}
export const deleteTodoAction = () => {
  return {
    type: 'CREATE_TODO',
    payload: {
      title: '',
      text: '',
    }
  }
}

export const updateTodoAction = (userState: State ) => {
  return {
    type: 'CREATE_TODO',
    payload: {
      title: '',
      text: '',
    }
  }
}