import * as Actions from './action';
import { createInitialState } from '../initialState';

interface State {
  id: number;
  title: string;
  detail: string;
  status: 'done' | 'undone';
}

export default (state = createInitialState(), action: { type: string; payload: State }) => {
  switch (action.type) {
    case Actions.ADD_MEMO:
      const { title, detail } = action.payload;
      return {
        ...state,
        payload: {
          todos: [...state.todos],
          title,
          detail,
        },
      };
    case Actions.DELETE_MEMO:
      const id = action.payload;
      return {
        ...state,
        payload: {
          id,
        },
      };
    case Actions.EDIT_MEMO:
      return {
        ...state,
        payload: {
          title,
          detail,
        },
      };
    case Actions.TOGGLE_MEMO_STATUS:
      let status = action.payload;
      return {
        ...state,
        payload: {
          status,
        },
      };
    default:
      return state;
  }
};
