import SingleRadio from "./SingleRadio";

type RadioGroupProps = {
  options: { label: string; value: string }[];
  label: string;
  name: string;
  error: string;
  disabled: boolean;
  required: boolean;
  onChange: (value: string) => void;
};

const RadioGroup = ({
  options,
  label,
  name,
  error,
  disabled,
  required,
  onChange,
}: RadioGroupProps) => {
  return (
    <div>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm/6 font-medium text-gray-900"
        >
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="mt-2 grid grid-cols-2 gap-4">
        {options.map((option) => (
          <div className="w-full" key={option.value}>
            <SingleRadio
              label={option.label}
              name="gender"
              value={option.value}
              disabled={disabled}
              required={required}
              onChange={onChange}
            />
          </div>
        ))}
      </div>
      {error && <p className="text-sm/6 text-red-500">{error}</p>}
    </div>
  );
};

export default RadioGroup;
