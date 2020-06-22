import React from "react";
import { CreateOrEditContainer, TitleContainer } from "./form.styles";
import FormInput from "../form-input/form-input.component";
import FormTextarea from "../form-textarea/form-textarea.component";
import CustomButton from "../custom-button/custom-button.component";

const FormComponent = ({
  edit,
  handleSubmit,
  title,
  description,
  author,
  content,
  handleChange,
}) => {
  return (
    <CreateOrEditContainer>
      <TitleContainer>{edit ? "Edit" : "Create"} Article</TitleContainer>
      <form className="create-or-edit-form" onSubmit={handleSubmit}>
        <FormInput
          name="title"
          id="title"
          title="minimum 3 characters and maximum 30 characters."
          type="text"
          value={title}
          minLength="3"
          maxLength="30"
          handleChange={handleChange}
          required
          label="Title"
        />
        <FormTextarea
          name="description"
          value={description}
          id="description"
          title="minimum 3 characters and maximum 250 characters."
          minLength="3"
          maxLength="250"
          rows="6"
          handleChange={handleChange}
          required
          label="Description"
        />
        <FormInput
          name="author"
          id="author"
          type="text"
          handleChange={handleChange}
          value={author}
          required
          label="Author"
        />
        <FormTextarea
          name="content"
          id="content"
          value={content}
          handleChange={handleChange}
          required
          rows="15"
          label="Content"
        />
        <div className="buttons">
          <CustomButton type="submit">
            {edit ? "Edit" : "Create"} Article
          </CustomButton>
        </div>
      </form>
    </CreateOrEditContainer>
  );
};

export default FormComponent;
