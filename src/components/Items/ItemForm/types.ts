import { InjectedFormProps } from "redux-form";

import * as ItemServices from "../../../services/items";

export type FormDataProps = ItemServices.CreatePayload;

export type OwnProps = {
  onSubmit: (data: FormDataProps) => void;
};

export type ComposeProps = InjectedFormProps;

export type Props = OwnProps & ComposeProps;
