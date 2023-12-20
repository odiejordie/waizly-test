import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Guest({ children }) {
  return (
    // <div className="flex flex-col items-center min-h-screen pt-6 bg-gray-100 sm:justify-center sm:pt-0">
    //     <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">

    //     </div>
    // </div>
    <section className="flex items-center justify-center w-screen h-screen bg-gradient-to-tr from-neutral-500 to-neutral-300">
      {children}
    </section>
  );
}
