import * as React from "react";
import { compose, withHandlers } from "recompose";
import { Field, reduxForm } from "redux-form";

import * as ItemFormProps from "./types";

import InputField from "../../common/InputField";
import ItemSchema from "../../../common/schemas/items.js";
import ValidatorUtils from "../../../common/utils/validator.js";

export const FORM_NAME = "ITEM_FORM";

function ItemForm(props: ItemFormProps.Props) {
  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      {props.error && <p className="form-error-message">{props.error}</p>}
      <Field
        label="Name"
        placeholder="Name"
        name="item.name"
        type="text"
        component={InputField}
      />
      <Field
        label="Description"
        placeholder="Description"
        name="item.description"
        type="description"
        component={InputField}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

const enhance = compose<ItemFormProps.ComposeProps, ItemFormProps.OwnProps>(
  reduxForm({
    form: FORM_NAME,
    validate: (data: ItemFormProps.FormDataProps) => {
      let validationData = Object.assign({}, data);
      validationData.item = validationData.item || {};
      return ValidatorUtils.getValidationErrors(
        validationData,
        ItemSchema.create
      );
    }
  })
);

export default enhance(ItemForm);
