// src/components/common/Modal.jsx
import { useEffect } from "react";
import Button from "./Button";

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footerButtons,
}) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    } else {
      document.removeEventListener("keydown", handleEsc);
    }

    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* الخلفية */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* نافذة المودال */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 animate-scale-in">
        {/* الهيدر */}
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* المحتوى */}
        <div className="px-6 py-4">{children}</div>

        {/* الفوتر (أزرار) */}
        {footerButtons && footerButtons.length > 0 && (
          <div className="px-6 py-4 flex justify-end space-x-3">
            {footerButtons.map((btn, index) => (
              <Button
                key={index}
                text={btn.text}
                onClick={btn.onClick}
                type={btn.type || "primary"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
