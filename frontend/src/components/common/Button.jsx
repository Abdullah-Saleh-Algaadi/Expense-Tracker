// src/components/common/Button.jsx

export default function Button({ text, onClick, type = "primary" }) {
  const baseStyle =
    "px-8 py-2 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-102 cursor-pointer ";

  const styles = {
    primary:
      "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:from-blue-700 hover:to-purple-700 hover:shadow-blue-200 ",
    secondary:
      "border-2 border-gray-300 text-gray-700 hover:border-blue-400 hover:text-blue-600",
    danger:
      "bg-red-500 text-white hover:bg-red-600 shadow-md hover:shadow-red-300",
  };

  return (
    <button
      onClick={onClick}
      className={baseStyle + (styles[type] || styles.primary)}
    >
      {text}
    </button>
  );
}
