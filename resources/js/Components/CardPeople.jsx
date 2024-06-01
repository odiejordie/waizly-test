import React, { useState } from "react";
import { motion as m } from "framer-motion";
import TextInput from "./TextInput";
import InputLabel from "./InputLabel";
import PrimaryButton from "./PrimaryButton";

const CardPeople = ({
  people,
  handleEditPerson,
  handleMarkPaid,
  handleRemovePerson,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(people.name);
  const [cost, setCost] = useState(people.cost);

  return (
    <m.div
      layout="position"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      key={people.id}
      className="flex flex-col w-full px-4"
    >
      {!isEdit ? (
        <div className="flex flex-col w-full gap-2 p-4 bg-white drop-shadow-md rounded-xl">
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-lg font-semibold">
              <span>Orang Hutang</span>
              <span className="text-sm font-normal">{people.name}</span>
            </div>
            <div className="flex gap-2">
              <svg
                onClick={() => setIsEdit(!isEdit)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32l8.4-8.4Z" />
                <path d="M5.25 5.25a3 3 0 0 0-3 3v10.5a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3V13.5a.75.75 0 0 0-1.5 0v5.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5V8.25a1.5 1.5 0 0 1 1.5-1.5h5.25a.75.75 0 0 0 0-1.5H5.25Z" />
              </svg>

              <svg
                onClick={() => handleRemovePerson(people.id)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                onClick={() => handleMarkPaid(people.id)}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0 0 16.5 9h-1.875a1.875 1.875 0 0 1-1.875-1.875V5.25A3.75 3.75 0 0 0 9 1.5Zm6.61 10.936a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
                <path d="M12.971 1.816A5.23 5.23 0 0 1 14.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 0 1 3.434 1.279 9.768 9.768 0 0 0-6.963-6.963Z" />
              </svg>
            </div>
          </div>
          <div className="flex justify-between">{people.cost}</div>
        </div>
      ) : (
        <div className="flex flex-col w-full gap-2 p-4 bg-white drop-shadow-md rounded-xl">
          <div className="flex flex-col gap-3 py-2">
            <div className="relative flex flex-col gap-1">
              <TextInput
                type="text"
                id="person-name"
                placeholder="person-name"
                name="person_name"
                autoComplete="person_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="placeholder-transparent peer"
              />

              <InputLabel
                htmlFor="person-name"
                value="Nama Orang Hutang"
                className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 py-2">
            <div className="relative flex flex-col gap-1">
              <TextInput
                type="text"
                id="total"
                placeholder="Total Biaya"
                name="total"
                autoComplete="total"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
                className="placeholder-transparent peer"
              />

              <InputLabel
                htmlFor="total"
                value="Total Biaya"
                className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <PrimaryButton onClick={() => setIsEdit(!isEdit)}>
              Batal
            </PrimaryButton>
            <PrimaryButton
              onClick={() => {
                handleEditPerson(people.id, name, cost);
                setIsEdit(!isEdit);
              }}
            >
              Simpan
            </PrimaryButton>
          </div>
        </div>
      )}
    </m.div>
  );
};

export default CardPeople;
