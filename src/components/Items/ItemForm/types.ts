import { InjectedFormProps } from "redux-form";

import * as ItemProps from "../../../reducers/data/items/types";
import * as TagProps from "../../../reducers/data/tags/types";

import * as ItemServices from "../../../services/items";

export type FormDataProps = ItemServices.CreatePayload;

export type OwnProps = {
  onSubmit: (data: FormDataProps) => void;
  initialValues?: { item: ItemProps.ItemProps };
};

export interface StoreProps {
  tags: Array<TagProps.TagProps>;
}

export type ComposeProps = InjectedFormProps & StoreProps;

export type Props = OwnProps & ComposeProps;
