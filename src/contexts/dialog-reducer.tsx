import React from 'react';
import { DialogActions } from './dialog-actions';

type DialogState = {
  isOpen: boolean;
  element: React.ReactNode;
};

export const initialState: DialogState = {
  isOpen: false,
  element: null,
};

export default (state: DialogState, action: DialogActions): DialogState => {
  switch (action.type) {
    case 'DIALOG/SHOW_DIALOG':
      return {
        ...state,
        isOpen: true,
        element: action.payload.element,
      };
    case 'MODAL/HIDE_DIALOG':
      return {
        ...state,
        isOpen: false,
        element: null,
      };
    default:
      return state;
  }
};
