import * as React from "react";
import { WrappedFieldProps } from "redux-form";
import Select from "react-select";

interface PropTypes {
  options: Array<any>;
  placeholder: string;
  label: string;
  clearable?: boolean;
}

const SelectField = (props: PropTypes & WrappedFieldProps) => {
  const { input, placeholder, meta: { touched, error }, label } = props;

  return (
    <div>
      <label>{label}</label>
      <Select
        clearable={props.clearable}
        name="form-field-name"
        value={input.value}
        onChange={(selection: { value: string; label: string }) => {
          let value = selection ? selection.value : null;
          input.onChange(value);
        }}
        options={props.options}
        multi={true}
      />
      {touched && error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default SelectField;
