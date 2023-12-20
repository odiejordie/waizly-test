import React from "react";

const DebtTypeCard = ({ item }) => {
  return (
    <div className="flex items-center justify-between w-full p-5 text-sm bg-white rounded-xl drop-shadow-md">
      <div className="flex items-center gap-5">
        {item.icon}
        <div>
          <p className="font-semibold">{item.name}</p>
          <p className="text-xs text-neutral-500">{item.name}</p>
        </div>
      </div>
      <p className="font-semibold">Rp 100.000</p>
    </div>
  );
};

export default DebtTypeCard;
