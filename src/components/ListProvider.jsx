import { createContext, useReducer } from 'react';
import { initialState, reducer } from '../reducers/shopping-list-item-reducer';
import { reduceLogger } from '../reducers/reduce-logger';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reduceLogger(reducer),
    initialState(),
  );
  const contextObj = { state, dispatch };
  return <Context.Provider value={ contextObj }>
    { children }
  </Context.Provider>;
};
