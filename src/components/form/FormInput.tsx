interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}

export function FormInput({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
      />
    </div>
  );
}
