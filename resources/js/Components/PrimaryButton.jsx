export default function PrimaryButton({
  className = "",
  disabled,
  children,
  ...props
}) {
  return (
    // <button
    //   {...props}
    //   className={
    //     `inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
    //       disabled && "opacity-25"
    //     } ` + className
    //   }
    //   disabled={disabled}
    // >
    //   {children}
    // </button>
    <div className={`group/btn-login relative ` + className}>
      <button
        {...props}
        disabled={disabled}
        className="font-silkscreen relative z-10 w-full rounded-md bg-gray-800 p-1.5 text-xs text-white outline-gray-500 transition-all hover:bg-gray-500 group-hover/btn-login:-translate-x-1 group-hover/btn-login:-translate-y-1"
      >
        {disabled ? "Tunggu Man" : children}
      </button>
      <div className="font-silkscreen absolute top-0 z-0 w-full rounded-md border border-gray-500 bg-transparent p-1 text-xs text-transparent transition-all group-hover/btn-login:translate-x-0.5 group-hover/btn-login:translate-y-0.5">
        {children}
      </div>
    </div>
  );
}
