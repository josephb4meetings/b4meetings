export default function Button({ children, onClick, type = "button", className = "" }) {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`px-4 py-2 font-semibold shadow-md focus:ring-2 focus:ring-opacity-75 ${className}`}
      >
        {children}
      </button>
    );
  }
  