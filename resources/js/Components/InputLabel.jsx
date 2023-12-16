export default function InputLabel({
  value,
  className = "",
  children,
  ...props
}) {
  return (
    <label
      {...props}
      className={`text-xs text-gray-800 transition-all ` + className}
    >
      {value ? value : children}
    </label>
  );
}
