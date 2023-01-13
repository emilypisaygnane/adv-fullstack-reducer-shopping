import { reducer, initialState } from './shopping-list-item-reducer.js';
import { 
  itemListCandidateBodyChanged,
  itemListLoadStartAction,
} from '../actions/item-list-actions.js';

describe('shopping list item reducer', () => {
  describe('item list', () => {
    it('switches loadingMode to "loading', () => {
      const newState = reducer(initialState(), itemListLoadStartAction());
      expect(newState.loadingMode).toEqual('loading');
    });
  });

  describe('item candidate', () => {
    it('uses the new body provided', () => {
      const oldState = {
        ...initialState(),
        itemCandidateBody: 'asdf',
      };
      const newState = reducer(oldState, itemListCandidateBodyChanged('foo'));
      expect(newState.itemCandidateBody).toEqual('foo');
    });
  });
});
