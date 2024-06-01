import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { motion as m } from "framer-motion";
import { debtTypeList } from "@/Constant/DebtType";
import DebtTypeCard from "@/Components/DebtTypeCard";
import ProfileCard from "@/Components/ProfileCard";

const Index = ({ auth }) => {
  return (
    <>
      <Head title="Dashboard" />

      <div className="flex flex-col w-full h-screen bg-white md:flex-row">
        {/* CARD WRAPPER */}
        <div className="flex flex-col items-center w-full p-8 bg-white shadow-lg rounded-b-2xl md:rounded-none md:h-full">
          {/* CARD */}
          <ProfileCard user={auth.user} />
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

        <div className="z-0 w-full h-full p-5 pt-10 pb-32 md:pb-5">
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="relative w-full h-full">
                <div className="relative z-10 flex flex-col justify-between w-full h-full gap-3 p-3 bg-white rounded-3xl">
                  <div className="flex items-center justify-between p-2">
                    <div className="p-2 border rounded-xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path d="m15 1.784-.796.795a1.125 1.125 0 1 0 1.591 0L15 1.784ZM12 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L12 1.784ZM9 1.784l-.796.795a1.125 1.125 0 1 0 1.591 0L9 1.784ZM9.75 7.547c.498-.021.998-.035 1.5-.042V6.75a.75.75 0 0 1 1.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 0 1 1.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 0 0-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 0 1 1.5 0v.797ZM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 0 1 2.585.364 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 3.67 0 2.605 2.605 0 0 0 2.33 0 4.104 4.104 0 0 1 2.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0 0 12 12.75ZM21.75 18.131a2.604 2.604 0 0 0-1.915.165 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.605 2.605 0 0 0-2.33 0 4.104 4.104 0 0 1-3.67 0 2.604 2.604 0 0 0-1.915-.165v2.494c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494Z" />
                      </svg>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.5 12a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm6 0a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="p-2 font-semibold text-md">
                    Makan dan minum
                  </div>
                  <div className="flex flex-col justify-center w-full p-3 text-white rounded-2xl bg-neutral-800">
                    <div className="w-full h-1 mt-4 bg-white rounded-full"></div>
                    <div className="flex justify-between p-1 pt-3 text-xs">
                      <p>20%</p>
                      <p>Rp 1.000</p>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 z-0 w-full h-full p-5 bg-neutral-400/80 blur-lg rounded-xl"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

Index.layout = (page) => (
  <AuthenticatedLayout children={page} header="Dashboard" />
);

export default Index;
