import { forwardRef, useEffect, useRef } from "react";

export default forwardRef(function TextInput(
  { type = "text", className = "", isFocused = false, ...props },
  ref
) {
  const input = ref ? ref : useRef();

  useEffect(() => {
    if (isFocused) {
      input.current.focus();
    }
  }, []);

  return (
    <input
      {...props}
      type={type}
      className={
        "rounded-md text-gray-800 border p-1.5 px-2 text-sm focus:outline-none focus:border-gray-800 focus:ring-0 placeholder:text-sm " +
        className
      }
      ref={input}
    />
  );
});
