export const itemListLoadSuccessAction = (itemList) => {
  return {
    type: 'item-list-load-success',
    itemList,
  };
};

export const itemListLoadStartAction = () => {
  return {
    type: 'item-list-load-start',
  };
};

export const itemListLoadErrorAction = (error) => {
  return {
    type: 'item-list-load-error',
    error,
  };
};

export const itemListCandidateBodyChanged = (body) => {
  return {
    body,
    type: 'item-list-candidate-body-changed',
  };
};

export const itemListSeenChangedAction = (itemId, seen) => {
  return {
    itemId,
    seen,
    type: 'item-list-seen-changed',
  };
};
