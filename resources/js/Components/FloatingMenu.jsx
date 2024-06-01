import { menus } from "@/Constant/Menus";
import { useRef, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { popupMenuVariants } from "@/Constant/AnimationVariants";
import useOnClickOutside from "@/Constant/OnClickOutside";
import { router } from "@inertiajs/react";
import MenuItem from "./MenuItem";

const FloatingMenu = () => {
  const [popupStatus, setPopupStatus] = useState(false);
  const popupRef = useRef();

  useOnClickOutside(popupRef, () => setPopupStatus(false));

  return (
    <div className="fixed z-50 flex items-center justify-between gap-3 p-3 m-auto rounded-full shadow-xl left-5 right-5 bottom-5 md:w-max bg-white/30 backdrop-blur">
      <div className="flex gap-3">
        {menus.map((item, key) => (
          <MenuItem item={item} key={key} />
        ))}
      </div>
      <div className="relative flex flex-none">
        <m.img
          id="floating-profile-img"
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => setPopupStatus(!popupStatus)}
          src="https://images.unsplash.com/photo-1695653422279-8a8a52ccb3cc?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="#"
          className="object-cover object-center rounded-full w-14 h-14"
        />
        <AnimatePresence mode="wait">
          {popupStatus && (
            <m.div
              ref={popupRef}
              variants={popupMenuVariants}
              initial={"hidden"}
              animate={"show"}
              exit={"close"}
              className="absolute right-0 mx-auto text-sm bg-white shadow rounded-xl w-max -top-16"
            >
              <ul className="flex text-base font-semibold divide-x">
                <li
                  onClick={() =>
                    router.visit(route("profile.edit"), {
                      preserveScroll: true,
                      only: [],
                    })
                  }
                  className="py-2.5 px-4 cursor-pointer"
                >
                  Profil
                </li>
                <li
                  id="logout-label"
                  onClick={() => {
                    router.visit(route("logout"), {
                      method: "post",
                      replace: true,
                      preserveScroll: true,
                    });
                  }}
                  className="py-2.5 px-4 cursor-pointer"
                >
                  Keluar
                </li>
              </ul>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FloatingMenu;
