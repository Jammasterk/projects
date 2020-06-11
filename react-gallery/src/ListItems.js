import React from "react";

function ListItems(props) {
  const items = props.items;
  const listItems = items.map(item => 
    {
    return (
      <div key={item.key}>
        <p>{items.text}</p>
      </div>
    );
  });
  console.log(listItems)
  return <div>{listItems}</div>;
}

export default ListItems;
