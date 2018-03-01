import * as React from "react";
import { compose } from "recompose";

import * as ItemFormProps from "../../Items/ItemForm/types";

import ItemForm from "../../Items/ItemForm";
import ROLES from "../../../constants/roles";
import withAuthorization from "../../HOC/withAuthorization";

const enhance = compose<ItemFormProps.OwnProps, ItemFormProps.OwnProps>(
  withAuthorization([ROLES.ADMIN])
);

function ItemCreateForm(props: ItemFormProps.OwnProps) {
  return (
    <div>
      <p>CREATE FORM</p>
      <ItemForm {...props} />
    </div>
  );
}

export default enhance(ItemCreateForm);
