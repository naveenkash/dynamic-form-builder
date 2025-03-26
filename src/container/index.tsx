import Input from "@/components/Input";
import data from "../sample.json";
import { useEffect, useMemo, useState } from "react";
import useFormHook from "@/hooks/form-hook";

const Container = () => {
  const [formData, setFormData] = useState<any>([]);

  const {
    formData: hookData,
    handleChange,
    registerField,
    submitForm,
  } = useFormHook();

  useEffect(() => {
    const timerId = setTimeout(() => {
      setFormData(data.data.sort((a, b) => a.position - b.position));
    }, 1000);

    return () => clearTimeout(timerId);
  }, []);

  const renderComponent = useMemo(() => {
    return (item: any) => {
      switch (item.componentType) {
        case "textInput":
          return (
            <Input
              {...item}
              {...registerField(item.id, {
                ...item.validation,
              })}
              value={hookData[item.id].value}
            />
          );
      }
    };
  }, [hookData]);

  const runValidationOnSubmit = () => {
    submitForm();
  };

  return (
    <>
      <div className="grid grid-cols-6 gap-2">
        {formData.map((item: any) => (
          <div className={`col-span-3`} key={item.id}>
            {renderComponent(item)}
          </div>
        ))}
      </div>
      <button
        className="mt-8 block rounded-md bg-indigo-500 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10"
        onClick={runValidationOnSubmit}
      >
        Submit
      </button>
    </>
  );
};

export default Container;
