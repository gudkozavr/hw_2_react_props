function createLi(arr) {
  return arr.map((element, index) => {
    return <li key={index}>{element}</li>;
  });
}

function ShoppingList(props) {
  console.log(props);

  return (
    <div>
      {props.items.length ? (
        <ul>{createLi(props.items)}</ul>
      ) : (
        <p>Список пуст</p>
      )}
    </div>
  );
}
export default ShoppingList;
