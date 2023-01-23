import { 
  createContext, 
  useReducer 
} from 'react';
import { 
  initialState, 
  reducer 
} from '../reducers/shopping-list-item-reducer.js';
import { reducerLogger } from '../reducers/reducer-logger.js';

export const Context = createContext({
  state: initialState(),
  reducer,
});

export const ListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducerLogger(reducer),
    initialState(),
  );
  const contextObj = { state, dispatch };
  return <Context.Provider value={ contextObj }>
    { children }
  </Context.Provider>;
};
