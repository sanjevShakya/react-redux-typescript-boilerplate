import * as React from "react";
import { compose } from "recompose";

import * as ItemFormProps from "../../Items/ItemForm/types";

import ItemForm from "../../Items/ItemForm";
import ROLES from "../../../constants/roles";
import withAuthorization from "../../HOC/withAuthorization";

const enhance = compose<ItemFormProps.OwnProps, ItemFormProps.OwnProps>(
  withAuthorization([ROLES.ADMIN])
);

function ItemEditForm(props: ItemFormProps.OwnProps) {
  if (!props.initialValues || !props.initialValues.item) return null;
  return (
    <div>
      <p>EDIT FORM</p>
      <ItemForm {...props} />
    </div>
  );
}

export default enhance(ItemEditForm);
