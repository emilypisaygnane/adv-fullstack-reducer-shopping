export const initalState = () => {
  return {
    loadingMode: 'at-rest',
    loadingError: null,
    itemCandidateBody: '',
    itemList: [],
  };
};

export const reducer = (state, action) => {
  switch(action.type) {
    case 'item-list-load=start':
      return {
        ...state,
        loadingMode: 'loading',
      };

    case 'item-list-load-error':
      return {
        ...state,
        loadingMode: 'error',
        loadingError: action.error,
      };
      
    case 'item-list-load-success':
      return {
        ...state,
        itemList: action.itemList,
        loadingMode: 'success',
      };

    case 'item-list-candidate-body-changed':
      return {
        ...state,
        postCandidateBody: action.body,
      };

    case 'item-list-seen-changed': {
      const itemList = [...state.itemList];
      const index = itemList.findIndex(item => item.id === action.itemId);
      itemList[index] = {
        ...itemList[index],
        seen: action.seen,
      };

      return {
        ...state,
        itemList,
      };

    }
    default:
      console.error(
        `Action type not supported ${action.type}.`,
        action,
      );
      return state;
  }
};
