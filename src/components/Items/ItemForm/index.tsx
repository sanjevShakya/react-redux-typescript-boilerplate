import * as React from "react";
import { connect } from "react-redux";
import { compose, withHandlers } from "recompose";
import { Field, reduxForm, reset } from "redux-form";

import * as ItemFormProps from "./types";
import * as StoreProps from "../../../reducers/types";

import ItemSchema from "../../../common/schemas/items.js";
import ValidatorUtils from "../../../common/utils/validator.js";
import * as ItemSelectors from "../../../selectors/items";
import * as TagSelectors from "../../../selectors/tags";

import InputField from "../../common/InputField";
import SelectField from "../../common/SelectField";

export const FORM_NAME = "ITEM_FORM";

function ItemForm(props: ItemFormProps.Props) {
  const { tags } = props;

  const options = tags.map(tag => {
    return {
      value: tag.id,
      label: tag.name
    };
  });

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
        type="text"
        component={InputField}
      />
      <Field
        label="Tags"
        placeholder="Tags"
        name="item.tags"
        component={SelectField}
        {...{ options: options, multi: true }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

function mapStateToProps(
  state: StoreProps.Props,
  props: ItemFormProps.OwnProps
) {
  const form =
    props.initialValues && props.initialValues.item.id
      ? "ITEM_EDIT_FORM"
      : "ITEM_CREATE_FORM";
  const tags = TagSelectors.getVisibleTags(state).data;

  return {
    form,
    tags
  };
}

const enhance = compose<ItemFormProps.ComposeProps, ItemFormProps.OwnProps>(
  connect(mapStateToProps),
  reduxForm({
    enableReinitialize: true,
    validate: (data: ItemFormProps.FormDataProps) => {
      let validationData = Object.assign({}, data);
      validationData.item = validationData.item || {};
      return ValidatorUtils.getValidationErrors(
        validationData,
        ItemSchema.create
      );
    },
    onSubmitSuccess: (result, dispatch, formProps) => {
      dispatch(reset(formProps.form));
    }
  })
);

export default enhance(ItemForm);
