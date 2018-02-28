import * as React from "react";
import { WrappedFieldProps } from "redux-form";
import Select from "react-select";

interface PropTypes {
  options: Array<OptionProps>;
  placeholder: string;
  label: string;
  clearable?: boolean;
  multi?: boolean;
}

interface OptionProps {
  value: string;
  label: string;
}

const SelectField = (props: PropTypes & WrappedFieldProps) => {
  const { input, placeholder, meta: { touched, error }, label, multi } = props;

  return (
    <div>
      <label>{label}</label>
      <Select
        clearable={props.clearable}
        name="form-field-name"
        value={input.value}
        onChange={(selection: OptionProps & Array<OptionProps>) => {
          let value = null;
          if (selection) {
            value = multi ? selection.map(s => s.value) : selection.value;
          }
          input.onChange(value);
        }}
        options={props.options}
        multi={multi}
      />
      {touched && error && <p className="error-msg">{error}</p>}
    </div>
  );
};

export default SelectField;
