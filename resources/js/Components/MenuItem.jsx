import { AnimatePresence, motion as m } from "framer-motion";
import { router, usePage } from "@inertiajs/react";
import { useRef, useState } from "react";
import { popupMenuVariants } from "@/Constant/AnimationVariants";
import useOnClickOutside from "@/Constant/OnClickOutside";

const MenuItem = ({ item }) => {
  const [popupStatus, setPopupStatus] = useState(false);
  const popupRef = useRef();

  const { url } = usePage();

  useOnClickOutside(popupRef, () => setPopupStatus(false));

  const handleActiveMenu = (route, url) => {
    if (Array.isArray(route)) {
      return route.includes(url);
    }

    return route === url;
  };

  return (
    <m.div
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => {
        if (!item?.child_menu) {
          router.visit(item.route, { preserveScroll: true });
        } else {
          setPopupStatus(!popupStatus);
        }
      }}
      className={`flex p-4 relative`}
    >
      {item.component}
      <AnimatePresence mode="wait">
        {popupStatus && (
          <m.div
            ref={popupRef}
            variants={popupMenuVariants}
            initial={"hidden"}
            animate={"show"}
            exit={"close"}
            className="absolute mx-auto text-sm bg-white shadow -left-2/3 rounded-xl w-max -top-16"
          >
            <ul className="flex text-base font-semibold divide-x">
              {item?.child_menu.map(({ name, route }, key) => (
                <li
                  key={key}
                  onClick={() =>
                    router.visit(route, {
                      preserveScroll: true,
                      only: [],
                    })
                  }
                  className="py-2.5 px-4 cursor-pointer"
                >
                  {name}
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
      {handleActiveMenu(item.route, url) && (
        <m.div
          layoutId="active-menu"
          className="absolute top-0 left-0 w-full h-full rounded-full bg-neutral-200/50"
        ></m.div>
      )}
    </m.div>
  );
};

export default MenuItem;
