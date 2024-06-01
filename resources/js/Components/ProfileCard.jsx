import { motion as m } from "framer-motion";

const ProfileCard = ({ user }) => {
  return (
    <m.div
      key={"profile-card"}
      whileTap={{ scale: 0.98 }}
      className="relative flex items-center justify-between flex-none w-full overflow-hidden border shadow-xl bg-neutral-200 md:max-w-md rounded-3xl h-60 md:max-h-80"
    >
      <div className="p-5"></div>
      <div className="relative w-1/2 h-full">
        <div className="absolute w-1/3 h-full bg-gradient-to-r from-neutral-200"></div>
        <img
          src="https://images.unsplash.com/photo-1695653422279-8a8a52ccb3cc?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="#"
          className="object-cover object-center w-full h-full"
        />
      </div>
      <div className="absolute top-0 z-10 bg-transparent border-4 rounded-full border-neutral-400/80 -left-56 w-96 h-96"></div>
      <div className="absolute top-0 z-10 bg-transparent border-2 rounded-full border-neutral-400/50 -left-56 w-80 h-80"></div>
      <div className="absolute top-0 z-10 rounded-full bg-neutral-300/50 -left-60 w-72 h-72"></div>
      <div className="absolute bottom-0 z-20 flex flex-col w-full p-5 bg-white/30 backdrop-blur-sm h-1/2">
        <span className="py-1 text-xs text-neutral-600">Card Name</span>
        <span className="text-xl font-semibold">{user.name}</span>
      </div>
    </m.div>
  );
};

export default ProfileCard;
