import { ToastProps } from "@/types";

export function Toast({
  message,
  type = "success",
  show,
  onClose,
}: ToastProps) {
  if (!show) return null;

  const styles = {
    success: "bg-white border-green-500 text-gray-900",
    error: "bg-white border-red-500 text-gray-900",
    info: "bg-white border-primary-500 text-gray-900",
  };

  const icons = {
    success: (
      <svg
        className="w-5 h-5 text-green-500"
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
    ),
    error: (
      <svg
        className="w-5 h-5 text-red-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    ),
    info: (
      <svg
        className="w-5 h-5 text-primary-500"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  };

  return (
    <div
      className={`fixed bottom-4 right-4 ${styles[type]} border-l-4 rounded-lg shadow-lg px-4 py-3 z-50 max-w-sm`}
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0">{icons[type]}</div>
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={onClose}
          className="ml-2 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
