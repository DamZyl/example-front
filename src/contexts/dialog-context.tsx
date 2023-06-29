import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from 'react';
import { hideDialog, showDialog } from './dialog-actions';
import dialogReducer, { initialState } from './dialog-reducer';

export interface DialogContextType {
  isOpen: boolean;
  handleShowDialog: (element: React.ReactNode) => void;
  handleHideDialog: () => void;
}

export const DialogContext = createContext<DialogContextType | undefined>(
  undefined,
);

export const useDialogContext = () => {
  const ctx = useContext(DialogContext);
  if (!ctx) {
    throw new Error('Component beyond DialogContext');
  }
  return ctx;
};

interface DialogManagerProps {
  children: React.ReactNode;
}

export const DialogManager = ({ children }: DialogManagerProps) => {
  const [state, dispatch] = useReducer(dialogReducer, initialState);

  const handleShowDialog = useCallback((element: React.ReactNode) => {
    dispatch(showDialog(element));
  }, []);

  const handleHideDialog = useCallback(() => {
    dispatch(hideDialog());
  }, []);

  const contextValues: DialogContextType = useMemo(
    () => ({
      isOpen: state.isOpen,
      handleHideDialog,
      handleShowDialog,
    }),
    [handleHideDialog, handleShowDialog, state.isOpen],
  );

  return (
    <DialogContext.Provider value={contextValues}>
      {children}
      {state.isOpen && state.element}
    </DialogContext.Provider>
  );
};
