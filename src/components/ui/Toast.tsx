import { ToastProps } from "@/types";

export function Toast({
  message,
  type = "success",
  show,
  onClose,
}: ToastProps) {
  if (!show) return null;

  const colors = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500",
  };

  return (
    <div
      className={`fixed bottom-4 right-4 ${colors[type]} text-white px-6 py-4 rounded-lg shadow-2xl z-50 animate-bounce`}
    >
      <div className="flex items-center gap-3">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="font-semibold">{message}</span>
        <button onClick={onClose} className="ml-4">
          ×
        </button>
      </div>
    </div>
  );
}
