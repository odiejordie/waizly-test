import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

const Index = () => {
  const [timeString, setTimeString] = useState("");
  const [formatTime, setFormatTime] = useState("");

  useEffect(() => {
    if (timeString && timeString.length === 10) {
      const timeParts = timeString.split(":");
      let hours = parseInt(timeParts[0]);
      let minutes = parseInt(timeParts[1]);
      let seconds = parseInt(
        timeParts[2].replace("AM", "").replace("PM", "").trim()
      );
      const isPM = timeParts[2].includes("PM");

      if (isPM && hours < 12) {
        hours += 12;
      } else if (!isPM && hours === 12) {
        hours = 0;
      }

      const formattedTime = new Date(
        0,
        0,
        0,
        hours,
        minutes,
        seconds
      ).toLocaleTimeString("en-GB", { hour12: false });

      setFormatTime(formattedTime);
    }
  }, [timeString]);

  return (
    <>
      <Head title="Basic Test 3" />

      <div className="flex flex-col w-full h-screen p-8 px-0 overflow-hidden bg-white">
        <div className="flex items-center justify-between w-full px-8 py-5 pb-4">
          <div className="flex flex-col text-xl font-semibold">
            Problem Solving Basic
            <span className="text-xs font-normal text-neutral-500">Test 3</span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-3 px-8 py-5">
          <div className="relative flex flex-col w-full gap-1">
            <TextInput
              type="text"
              id="array-number-input"
              placeholder="Masukan Angka dan pisahkan dengan spasi"
              name="array_number"
              autoComplete="array_number"
              value={timeString}
              onChange={(e) => setTimeString(e.target.value)}
              className="placeholder-transparent peer"
            />

            <InputLabel
              htmlFor="array-number-input"
              value="Masukan Angka dan pisahkan dengan spasi"
              className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
            />
          </div>
          <div className="font-semibold text-md">Hasilnya : </div>
          {formatTime && (
            <div className="flex flex-col text-sm">
              <div className="">{formatTime}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Index.layout = (page) => (
  <AuthenticatedLayout children={page} header="Basic Test 3" />
);

export default Index;
