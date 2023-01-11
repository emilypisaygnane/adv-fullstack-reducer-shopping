export default function ShoppingListForm({
  body,
  onBodyChanged,
  onSubmit,
}) {
  return <form onSubmit={(e) => {
    e.preventDefault();
    onSubmit();
  }}>
    <textarea value={body} onChange={(e) => {
      onBodyChanged(e.target.value);
    }}/>
  </form>;
}
