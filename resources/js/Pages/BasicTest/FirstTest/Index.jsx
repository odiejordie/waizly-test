import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

const Index = () => {
  const [arrayNumberContainer, setArrayNumberContainer] = useState("");
  const [arrayNumber, setArrayNumber] = useState([]);
  const [numberCategories, setNumberCategories] = useState({
    max: "",
    min: "",
    total: "",
    totalMax: "",
    totalMin: "",
  });
  const [summaryNumber, setSummaryNumber] = useState([]);

  useEffect(() => {
    const array = arrayNumberContainer
      ? arrayNumberContainer.match(/[^ ]+/g)
      : [];

    const max = Math.max(...array);
    const min = Math.min(...array);
    const total = array.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    const totalMax = total - min;
    const totalMin = total - max;

    if (arrayNumberContainer) {
      setArrayNumber(array);
      setNumberCategories({
        max,
        min,
        total,
        totalMax,
        totalMin,
      });
      setSummaryNumber(() =>
        array.map((exceptNum) => {
          const filterArray = array.filter(
            (num) => parseInt(num) !== parseInt(exceptNum)
          );
          const total = filterArray.reduce(
            (a, b) => parseInt(a) + parseInt(b),
            0
          );
          return {
            except: exceptNum,
            summary: filterArray.join(" + ") + ` = ${total}`,
          };
        })
      );
    }
  }, [arrayNumberContainer]);

  return (
    <>
      <Head title="Basic Test 1" />

      <div className="flex flex-col w-full h-screen p-8 px-0 overflow-hidden bg-white">
        <div className="flex items-center justify-between w-full px-8 py-5 pb-4">
          <div className="flex flex-col text-xl font-semibold">
            Problem Solving Basic
            <span className="text-xs font-normal text-neutral-500">Test 1</span>
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
              value={arrayNumberContainer}
              onChange={(e) => {
                const value = e.target.value;
                if (
                  value.startsWith(" ") &&
                  arrayNumberContainer.length === 0
                ) {
                  return;
                }
                const filteredValue = value.replace(/[^0-9 ]/g, "");
                setArrayNumberContainer(filteredValue);
              }}
              className="placeholder-transparent peer"
            />

            <InputLabel
              htmlFor="array-number-input"
              value="Masukan Angka dan pisahkan dengan spasi"
              className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
            />
          </div>
          <div className="font-semibold text-md">Hasilnya : </div>
          {arrayNumberContainer && (
            <div className="flex flex-col text-sm">
              <div className="">{`Arr : [${arrayNumber}]`}</div>
              <div className="">{`Minimal : ${numberCategories.min}`}</div>
              <div className="">{`Maksimal : ${numberCategories.max}`}</div>
              <div className="">{`Hasil total Maksimal dan Minimal : ${numberCategories.totalMin} & ${numberCategories.totalMax}`}</div>
              <label htmlFor="">Hasil Penjumlahan : </label>
              {summaryNumber.map((result, key) => (
                <div key={key} className="">
                  {`${key + 1}. Total semua kecuali ${
                    result.except
                  }, totalnya ${result.summary}.`}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Index.layout = (page) => (
  <AuthenticatedLayout children={page} header="Basic Test 1" />
);

export default Index;
