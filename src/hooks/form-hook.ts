import { useCallback, useMemo, useRef, useState } from "react";

type RegisterFieldProps = {
  id: string;
  value: string;
  pattern?: RegExp;
  required?: boolean;
};

type FormData = {
  [key: string]: RegisterFieldProps;
};

const useFormHook = () => {
  const formData = useRef<FormData>({});

  const handleChange = useCallback((id: string, value: string) => {
    formData.current[id].value = value;
  }, []);

  const registerField = useCallback((id: string, props: RegisterFieldProps) => {
    formData.current[id] = props;
    return {
      value: formData.current[id].value,
      onChange: (value: string) => handleChange(id, value),
    };
  }, []);

  const submitForm = useCallback(() => {
    if (Object.keys(formData).length === 0) {
      console.log("No fields to submit");
      return;
    }

    const errors: any = {};

    Object.keys(formData.current).forEach((id: string) => {
      const { value, pattern, required } = formData.current[id];
      if (required && !value) {
        errors[id] = "This field is required";
        return;
      }
      if (pattern && !RegExp(pattern).test(value)) {
        errors[id] = "Invalid value";
        return;
      }
    });

    if (Object.keys(errors).length > 0) {
      console.log("Errors", errors);
      return;
    }

    console.log("Form saved");
  }, [formData]);

  return {
    formData: formData.current,
    handleChange,
    registerField,
    submitForm,
  };
};

export default useFormHook;
