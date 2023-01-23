export default function ShoppingListForm({
  body,
  onBodyChanged,
  onSubmit,
}) {
  return <form onSubmit={(e) => {
    e.preventDefault();
    onSubmit(body);
  }}>
    <textarea value={body} onChange={(e) => {
      onBodyChanged(e.target.value);
    }}/>
    <button type="submit">Add To List</button>
  </form>;
}
