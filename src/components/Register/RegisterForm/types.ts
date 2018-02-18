// components/Login/LoginForm/types
import { InjectedFormProps } from "redux-form";

export type FormDataProps = {
  user: {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    confirmPassword?: string;
  };
};

export type OwnProps = {
  onSubmit: (data: FormDataProps) => void;
};

export type ComposeProps = InjectedFormProps;

export type Props = OwnProps & ComposeProps;
