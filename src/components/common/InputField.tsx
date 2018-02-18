import * as React from "react";
import { WrappedFieldProps } from "redux-form";

interface PropTypes {
  placeholder: string;
  type: string;
  label: string;
}

const InputField = (props: PropTypes & WrappedFieldProps) => {
  const { input, placeholder, type, meta: { touched, error }, label } = props;

  return (
    <div>
      <label>{label}</label>
      <input {...input} placeholder={placeholder} type={type} />
      {touched && error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default InputField;
