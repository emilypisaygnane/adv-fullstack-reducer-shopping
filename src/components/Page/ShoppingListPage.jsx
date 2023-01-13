import ShoppingList from '../Shopping/ShoppingList.jsx';
import ShoppingListForm from '../Shopping/ShoppingListForm.jsx';
import { useContext, useEffect } from 'react';
import { Context } from '../ListProvider.jsx';
import { createShoppingListItem } from '../../services/shopping-list-items.js';
import { 
  itemListCandidateBodyChanged,
  itemListSeenChangedAction,
} from '../../actions/item-list-actions.js';
import { getItemsEffect } from '../../effects/post-list-effects.js';

export default function ShoppingListPage() {
  const { state, dispatch } = useContext(Context);
  useEffect(() => {
    getItemsEffect(dispatch);
  }, []);

  const onBodyChanged = (body) => {
    dispatch(itemListCandidateBodyChanged(body));
  };
  
  const dispatchSeenChanged = (itemId, seen) => {
    dispatch(itemListSeenChangedAction(itemId, seen));
  };
  return <section>
    <h1>My Shopping List</h1>

    <ShoppingListForm
      body={state.itemCandidateBody}
      onBodyChanged={onBodyChanged}
      onSubmit={async (body) => {
        await createShoppingListItem(body);
        getItemsEffect(dispatch);
        dispatch(itemListCandidateBodyChanged(''));
      }}
    />

    { state.loadingMode === 'loading'
      ? <span>Loading Posts!</span>
      : <ShoppingList
        itemList={state.itemList}
        handleSeenChangedByItemId={(itemId, seen) => {
          dispatchSeenChanged(itemId, seen);
        }}
      />
    }
    
  </section>;
}
