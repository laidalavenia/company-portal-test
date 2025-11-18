interface RadioOption {
  value: string;
  label: string;
}

interface FormRadioGroupProps {
  label: string;
  name: string;
  options: readonly RadioOption[];
  required?: boolean;
}

export function FormRadioGroup({
  label,
  name,
  options,
  required = false,
}: FormRadioGroupProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-3">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {options.map((option) => (
          <label
            key={option.value}
            className="relative flex items-center p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-primary-500 hover:bg-primary-50 has-[:checked]:border-primary-500 has-[:checked]:bg-primary-50 transition-colors"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              required={required}
              className="w-4 h-4 text-primary-600 focus:ring-2 focus:ring-primary-500 border-gray-300"
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}
