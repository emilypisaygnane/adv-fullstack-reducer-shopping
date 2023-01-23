import ShoppingPost from './ShoppingPost.jsx';

export default function ShoppingList({
  itemList,
  handleSeenChangedByItemId,
}) {
  console.log(itemList);
  return <ol>
    
    {itemList.map(item => {
      return  <li key={item.id}>
        <ShoppingPost item={item} handleSeenChanged={(seen) => {
          handleSeenChangedByItemId(item.id, seen);
        }}/>
      </li>;
    })}
  </ol>;
}
