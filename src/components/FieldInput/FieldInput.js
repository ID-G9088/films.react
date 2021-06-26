import { useField } from "formik";
import React from "react";
import "./FieldInput.scss";

const FieldInput = (props) => {
  const { name, type, label } = props;
  const [field, meta] = useField(name);
  return (
    <div>
      <div>
        <label>
          {label}
          <input type={type} {...field} />
        </label>
      </div>
      {meta.error && meta.touched && <span className="error">{meta.error}</span>}
    </div>
  );
};

export default FieldInput;
