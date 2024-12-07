function ListGroup() {
  let items = ["New Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai"];

  return (
    <>
      <h1>List Group</h1>
      {items.length === 0 && <p>No items in the list!</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(event)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
