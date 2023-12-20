import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { motion as m } from "framer-motion";
import { debtTypeList } from "@/Constant/DebtType";
import DebtTypeCard from "@/Components/DebtTypeCard";

const Index = ({ auth }) => {
  return (
    <AuthenticatedLayout user={auth.user}>
      <Head title="Dashboard" />

      <div className="flex flex-col w-full h-screen bg-white md:flex-row">
        {/* CARD WRAPPER */}
        <div className="flex flex-col items-center w-full p-8 pt-24 bg-white shadow-lg md:h-full">
          {/* CARD */}
          <div className="relative flex items-center justify-between w-full overflow-hidden border shadow-xl bg-neutral-200 md:max-w-md rounded-3xl h-60 md:max-h-80">
            <div className="p-5"></div>
            <div className="relative w-1/2 h-full">
              <div className="absolute w-1/3 h-full bg-gradient-to-r from-neutral-200"></div>
              <img
                src="https://images.unsplash.com/photo-1695653422279-8a8a52ccb3cc?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="#"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="absolute bottom-0 flex flex-col w-full p-5 bg-white/30 backdrop-blur-sm h-1/2">
              <span className="py-1 text-xs text-neutral-600">Card Name</span>
              <span className="text-xl font-semibold">{auth.user.name}</span>
            </div>
          </div>
          {/* END CARD */}
          <div className="flex flex-col w-full p-10 text-center border-b border-dashed">
            <span className="text-2xl text-center font-silkscreen">
              Rp. 100,000
            </span>
            <span className="py-1 text-sm text-neutral-500">Total Balance</span>
          </div>

          <h1 className="w-full py-5 text-lg font-semibold text-left">
            Transaksi
          </h1>
          <div className="flex flex-col w-full gap-3">
            {debtTypeList.map((item, i) => (
              <DebtTypeCard key={i} item={item} />
            ))}
          </div>
        </div>
        {/* END CARD WRAPPER */}
        <div className="w-full h-20 p-5">
          <div> kotak</div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Index;
