export const ADD_MEMO = 'ADD_MEMO';
export const addMemo = (id: number, title: string, detail: string) => {
  return {
    type: ADD_MEMO,
    payload: {
      id,
      title,
      detail,
    },
  };
};

export const DELETE_MEMO = 'DELETE_MEMO';
export const deleteMemo = (id: number) => {
  return {
    type: DELETE_MEMO,
    payload: {
      id,
    },
  };
};

export const EDIT_MEMO = 'EDIT_MEMO';
export const editMemo = (title: string, detail: string) => {
  return {
    type: EDIT_MEMO,
    payload: {
      title,
      detail,
    },
  };
};

export const TOGGLE_MEMO_STATUS = 'TOGGLE_MEMO_STATUS';
export const toggleMemoStatus = (status: boolean) => {
  return {
    type: TOGGLE_MEMO_STATUS,
    payload: {
      status,
    },
  };
};
