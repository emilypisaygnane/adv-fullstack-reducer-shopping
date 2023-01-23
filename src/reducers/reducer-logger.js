export const reducerLogger = (reducer) => {
  return (state, action) => {
    console.info('Before', state);
    console.info('Action', action);
    const newState = reducer(state, action);
    console.info('After', newState);
    return newState;
  };
};
