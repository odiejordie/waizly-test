import { menus } from "@/Constant/Menus";
import { useRef, useState } from "react";
import { AnimatePresence, motion as m } from "framer-motion";
import { popupMenuVariants } from "@/Constant/AnimationVariants";
import useOnClickOutside from "@/Constant/OnClickOutside";
import { router, usePage } from "@inertiajs/react";

const FloatingMenu = () => {
  const [popupStatus, setPopupStatus] = useState(false);
  const { url } = usePage();

  const popupRef = useRef();

  useOnClickOutside(popupRef, () => setPopupStatus(false));

  return (
    <div className="fixed z-50 flex items-center justify-between gap-3 p-3 m-auto rounded-full shadow-xl left-5 right-5 bottom-5 md:w-max bg-white/30 backdrop-blur">
      <div className="flex gap-3">
        {menus.map((item, key) => (
          <div
            key={key}
            onClick={() => {
              router.visit(item.route);
            }}
            className={`flex p-4 relative`}
          >
            {item.component}
            {item.route === url && (
              <m.div
                layoutId="active- menu"
                className="absolute top-0 left-0 w-full h-full rounded-full bg-neutral-200/50"
              ></m.div>
            )}
          </div>
        ))}
      </div>
      <div className="relative flex flex-none">
        <m.img
          whileTap={{
            scale: 0.9,
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
                <li className="py-2.5 px-4 cursor-pointer">Profil</li>
                <li
                  onClick={() => {
                    router.visit(route("logout"), {
                      method: "post",
                      replace: true,
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
