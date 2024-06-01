import { motion as m } from "framer-motion";

const PersonItem = ({ person }) => {
  return (
    <m.div
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center justify-center flex-none w-20 h-20 p-0.5 bg-gradient-to-br from-neutral-800 to-neutral-200 rounded-full text-neutral-500"
    >
      <div className="w-full h-full overflow-hidden border-2 border-white rounded-full">
        <img src={person.ava} alt="-" loading="lazy" />
      </div>
      <span className="absolute text-xs -bottom-6">{person.name}</span>
      <span className="absolute p-0.5 px-1 text-xs text-white border-2 border-white rounded-md -bottom-1.5 bg-neutral-500">
        100k
      </span>
    </m.div>
  );
};

export default PersonItem;
