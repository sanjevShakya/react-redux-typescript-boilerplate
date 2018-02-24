// components/Login/LoginForm/types
import { InjectedFormProps } from "redux-form";

import * as AuthServices from "../../../services/auth";

export type FormDataProps = AuthServices.LoginPayload;

export type OwnProps = {
  onSubmit: (data: FormDataProps) => void;
};

export type ComposeProps = InjectedFormProps;

export type Props = OwnProps & ComposeProps;
