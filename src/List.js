import React from "react";

/*
  Usage Example:

  <List>
    <Item>Some Text</Item>
    <Item>Other Text</Item>
  </List>
*/
export function List(props) {
  return <ul className="ListComponent">{props.children}</ul>;
}

export function Item(props) {
  let styleConfig = {
    background: "black",
    color: "white",
  };
  return <li style={styleConfig}>{props.children}</li>;
}
