import React from "react";

function Input(props) {
  return (
    <div class={props.div_class}>
      <label for = {props.id}>
        {props.name}
      </label>
      <input
        class={props.class}
        name={props.name}
        id={props.id}
        type={props.type}
        placeholder={props.id}
      ></input>
    </div>
  );
}

export default Input;
