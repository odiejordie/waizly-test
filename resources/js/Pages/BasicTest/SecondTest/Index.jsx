import { useEffect, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";

const Index = () => {
  const [arrayNumberContainer, setArrayNumberContainer] = useState("");
  const [arrayNumber, setArrayNumber] = useState([]);
  const [summary, setSummary] = useState({
    negative: "",
    positive: "",
    zero: "",
    negaiveProportion: "",
    positiveProportion: "",
    zeroProportion: "",
  });

  useEffect(() => {
    const array = arrayNumberContainer
      ? arrayNumberContainer.match(/[^ ]+/g).map(Number)
      : [];

    if (arrayNumberContainer) {
      setArrayNumber(array.sort((a, b) => a - b));

      const countNegatives = array.filter((x) => x < 0).length;
      const countPositives = array.filter((x) => x > 0).length;
      const countZeros = array.filter((x) => x === 0).length;

      const negativeProportion = countNegatives / array.length;
      const positiveProportion = countPositives / array.length;
      const zeroProportion = countZeros / array.length;

      setSummary({
        negative: countNegatives,
        positive: countPositives,
        zero: countZeros,
        negaiveProportion: negativeProportion.toLocaleString("en", {
          minimumFractionDigits: 6,
        }),
        positiveProportion: positiveProportion.toLocaleString("en", {
          minimumFractionDigits: 6,
        }),
        zeroProportion: zeroProportion.toLocaleString("en", {
          minimumFractionDigits: 6,
        }),
      });
    }
  }, [arrayNumberContainer]);

  return (
    <>
      <Head title="Basic Test 2" />

      <div className="flex flex-col w-full h-screen p-8 px-0 overflow-hidden bg-white">
        <div className="flex items-center justify-between w-full px-8 py-5 pb-4">
          <div className="flex flex-col text-xl font-semibold">
            Problem Solving Basic
            <span className="text-xs font-normal text-neutral-500">Test 2</span>
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
                const filteredValue = value.replace(
                  /[^0-9 -]|(?<!^|\s)-+/g,
                  ""
                );
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
              <div className="">{`Array : [${arrayNumber}]`}</div>
              <div className="">{`Panjang Array : ${arrayNumber.length}`}</div>
              <div className="">{`Total Positif : ${summary.positive}`}</div>
              <div className="">{`Total Negatif : ${summary.negative}`}</div>
              <div className="">{`Total Nol : ${summary.zero}`}</div>
              <label htmlFor="" className="pt-5">
                Hasil Penjumlahan :{" "}
              </label>
              <div className="">{`Positif : ${summary.positiveProportion}`}</div>
              <div className="">{`Negatif : ${summary.negaiveProportion}`}</div>
              <div className="">{`Kosong : ${summary.zeroProportion}`}</div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

Index.layout = (page) => (
  <AuthenticatedLayout children={page} header="Basic Test 2" />
);

export default Index;
