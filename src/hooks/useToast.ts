import { useState, useCallback } from "react";

interface Toast {
  message: string;
  type: "success" | "error" | "info";
  show: boolean;
}

export function useToast() {
  const [toast, setToast] = useState<Toast>({
    message: "",
    type: "success",
    show: false,
  });

  const showToast = useCallback(
    (message: string, type: Toast["type"] = "success") => {
      setToast({ message, type, show: true });
      setTimeout(() => {
        setToast((prev) => ({ ...prev, show: false }));
      }, 3000);
    },
    []
  );

  const hideToast = useCallback(() => {
    setToast((prev) => ({ ...prev, show: false }));
  }, []);

  return { toast, showToast, hideToast };
}
