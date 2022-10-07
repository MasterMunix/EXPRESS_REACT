import React from "react";
import Input from "./input";

function Form(props) {
  return (
    <form
      id={props.id}
      name={props.name}
      action={props.action}
      method={props.method}
    >
      <Input
        class="form-control"
        name="name"
        id="name"
        type="text"
        placeholder="Escribe tu nombre"
        div_class="form-group"
      />
      <Input
        class="form-control"
        name="lastName"
        id="lastName"
        type="text"
        placeholder="Escribe tu apellido"
        div_class="form-group"
      />
      <Input
        class=""
        name=""
        id=""
        type="submit"
        placeholder=""
        value="Submit"
      />
    </form>
  );
}

export default Form;
