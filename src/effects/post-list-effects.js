import {
  itemListLoadSuccessAction,
  itemListLoadStartAction,
  itemListLoadErrorAction,
} from '../actions/item-list-actions';
import { getShoppingListItems } from '../services/shopping-list-items';

export const getItemsEffect = async (dispatch) => {
  dispatch(itemListLoadStartAction());
  try {
    const items = await getShoppingListItems();
    dispatch(itemListLoadSuccessAction(items));
  } catch (error) {
    dispatch(itemListLoadErrorAction(error));
  }
};
