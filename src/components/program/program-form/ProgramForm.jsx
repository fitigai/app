import React from "react";
import PropTypes from "prop-types";
import { useFormik } from "formik";

// import validationSchema from "./validation";
import { Form, Field, Button, Pane } from "../../ui";

const ProgramForm = ({ initialValues, onSubmit, isLoading }) => {
  const {
    handleSubmit,
    handleBlur,
    handleChange,
    touched,
    values,
    errors,
  } = useFormik({
    initialValues: {
      title: initialValues.title || "",
      description: initialValues.description || "",
      days: initialValues.days || 1,
      isPrivate: initialValues.isPrivate || false,
    },
    // validationSchema: validationSchema,
    onSubmit: (values) => onSubmit(values),
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Field
        label="Title"
        name="title"
        type="text"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.title}
        errorMessage={touched.title && errors.title}
        disabled={isLoading}
        isRequired
      />

      <Field
        label="Description"
        name="description"
        type="textarea"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.description}
        errorMessage={touched.description && errors.description}
        disabled={isLoading}
      />

      <Field
        label="Number of days"
        name="days"
        type="number"
        description="Enter the length of your program in number of days (e.g. for a 7 days program enter 7)."
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.days}
        errorMessage={touched.days && errors.days}
        disabled={isLoading}
        isRequired
      />

      <Field
        label="Is Private?"
        name="isPrivate"
        type="switch"
        onChange={handleChange}
        checked={values.isPrivate}
        disabled={isLoading}
      />

      <Pane display="flex">
        <Button type="submit" isLoading={isLoading} appearance="primary">
          Create
        </Button>
      </Pane>
    </Form>
  );
};

ProgramForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

ProgramForm.defaultProps = {
  initialValues: {},
};

export default ProgramForm;
