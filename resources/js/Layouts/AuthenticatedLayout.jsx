import { useState } from "react";
import { usePage } from "@inertiajs/react";
import FloatingMenu from "@/Components/FloatingMenu";
import { AnimatePresence, motion as m } from "framer-motion";

export default function Authenticated({ header, children }) {
  const { url } = usePage();

  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* FLOATING MENU */}
      <FloatingMenu />
      {/* END FLOATING MENU */}
      <AnimatePresence initial={false} mode="wait">
        <m.main
          key={url}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="w-full min-h-screen overflow-auto"
        >
          <h1 className="p-8 pb-0 text-2xl font-semibold text-right md:z-10 md:text-left">
            {header}
          </h1>
          {children}
        </m.main>
      </AnimatePresence>
    </div>
  );
}
