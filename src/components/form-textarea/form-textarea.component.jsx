import React from "react";
import {
  GroupContainer,
  FormTextareaContainer,
  FormTextareaLabel,
} from "./form-textarea.styles";

const FormTextarea = ({ label, handleChange, ...otherProps }) => {
  return (
    <GroupContainer>
      <FormTextareaContainer onChange={handleChange} {...otherProps} />
      {label ? (
        <FormTextareaLabel
          className={`${otherProps.value.length ? "shrink" : ""}`}
        >
          {label}
        </FormTextareaLabel>
      ) : null}
    </GroupContainer>
  );
};

export default FormTextarea;
