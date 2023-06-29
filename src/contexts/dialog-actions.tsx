import React from 'react';

export const SHOW_DIALOG = 'DIALOG/SHOW_DIALOG' as const;
export const HIDE_DIALOG = 'MODAL/HIDE_DIALOG' as const;

export const showDialog = (element: React.ReactNode) => ({
  type: SHOW_DIALOG,
  payload: { element },
});

type ShowDialog = ReturnType<typeof showDialog>;

export const hideDialog = () => ({
  type: HIDE_DIALOG,
});

type HideDialog = ReturnType<typeof hideDialog>;

export type DialogActions = ShowDialog | HideDialog;
