type SingleRadioProps = {
  label: string;
  name: string;
  value: string;
  disabled: boolean;
  required: boolean;
  onChange: (value: string) => void;
};

const SingleRadio = ({
  label,
  name,
  value,
  disabled,
  required,
  onChange,
}: SingleRadioProps) => {
  return (
    <div className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-300 px-2 py-1">
      <input
        type="radio"
        name={name}
        className="h-4 w-4 rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-500"
        value={value}
        disabled={disabled}
        required={required}
        onChange={(e) => onChange(e.target.value)}
      />
      <label className="text-sm/6 font-medium text-gray-900" htmlFor={name}>
        {label}
      </label>
    </div>
  );
};

export default SingleRadio;
