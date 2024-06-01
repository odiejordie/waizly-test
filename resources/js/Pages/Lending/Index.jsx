import { useEffect, useRef, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { AnimatePresence, motion as m, useDragControls } from "framer-motion";
import PersonItem from "./Partials/PersonItem";
import useOnScreen from "@/Constant/UseOnScreen";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import CardPeople from "@/Components/CardPeople";

const persons = [
  {
    name: "Gubli",
    ava: "https://images.unsplash.com/photo-1611890234161-78039cf96c87?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Markus",
    ava: "https://images.unsplash.com/photo-1568322503882-d119ddcb1c93?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE3fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Maya",
    ava: "https://images.unsplash.com/photo-1579473755852-abe535c52ff0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI4fHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Rebek",
    ava: "https://images.unsplash.com/photo-1665425408324-8714b718043f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
  {
    name: "Rojid",
    ava: "https://images.unsplash.com/photo-1584598788860-2695a3a6c874?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDYwfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D",
  },
];

const Index = ({ auth }) => {
  const peopleWrapper = useRef(null);
  const firstItem = useRef(null);
  const lastItem = useRef(null);

  const firstItemVisible = useOnScreen(firstItem);
  const lastItemVisible = useOnScreen(lastItem);

  const [inputContainer, setInputContainer] = useState({
    id: "",
    name: "",
    cost: "",
    status: "Hutang",
  });
  const [listPeople, setListPeople] = useState([]);
  const [search, setSearch] = useState("");

  const handleAddPerson = () => {
    if (inputContainer.name && inputContainer.cost) {
      setListPeople([...listPeople, { ...inputContainer, id: Math.random() }]);
      setInputContainer({
        id: "",
        name: "",
        cost: "",
        status: "Hutang",
      });
    }
  };

  const handleRemovePerson = (id) => {
    setListPeople(listPeople.filter((people) => people.id !== id));
  };

  const handleMarkPaid = (id) => {
    setListPeople(
      listPeople.map((people) => {
        if (people.id === id) {
          return { ...people, status: "Paid" };
        }
        return people;
      })
    );
  };

  const handleEditPerson = (id, name, cost) => {
    setListPeople(
      listPeople.map((people) => {
        if (people.id === id) {
          return { ...people, name, cost };
        }
        return people;
      })
    );
  };

  return (
    <>
      <Head title="Perhutangan" />

      <div className="flex flex-col w-full h-screen gap-5 p-8 px-0 pb-32 overflow-scroll bg-white">
        <div className="flex-none w-full pt-2 pb-6 overflow-hidden">
          <m.div ref={peopleWrapper} className="relative w-full">
            <m.div
              drag={
                firstItemVisible && !lastItemVisible
                  ? "x"
                  : !firstItemVisible && lastItemVisible
                  ? "x"
                  : !firstItemVisible && !lastItemVisible && "x"
              }
              dragConstraints={peopleWrapper}
              className="relative flex flex-none gap-3 px-8 w-max"
            >
              <div
                ref={firstItem}
                className={`w-1 h-1 m-0 bg-transparent absolute left-0`}
              ></div>
              {persons.map((person, i) => (
                <PersonItem key={i} person={person} />
              ))}

              <div
                ref={lastItem}
                className={`w-1 h-1 m-0 bg-transparent absolute right-0`}
              ></div>
            </m.div>
          </m.div>
        </div>
        <AnimatePresence>
          <m.div
            layout="position"
            key="paid"
            className="flex items-center justify-between w-full px-8 py-5 pb-4"
          >
            <div className="flex flex-col text-xl font-semibold">
              Hutang Lunas
              <span className="text-xs font-normal text-neutral-500">
                Lunas
              </span>
            </div>

            <div className="flex flex-col gap-3 py-2">
              <div className="relative flex flex-col gap-1">
                <TextInput
                  type="text"
                  id="search"
                  placeholder="Cari Orang"
                  name="search"
                  autoComplete="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="placeholder-transparent peer"
                />

                <InputLabel
                  htmlFor="search"
                  value="Cari Orang"
                  className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
                />

                {/* <InputError message={errors?.email} className="text-xs" /> */}
              </div>
            </div>
            {/* <PrimaryButton>Tambah</PrimaryButton> */}
          </m.div>
          {listPeople
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(
              (people) =>
                people.status !== "Hutang" && (
                  <m.div
                    layout="position"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    key={people.id}
                    className="flex flex-col w-full px-4"
                  >
                    <div className="flex flex-col w-full gap-2 p-4 bg-white drop-shadow-md rounded-xl">
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col text-lg font-semibold">
                          <span>Orang Hutang</span>
                          <span className="text-sm font-normal">
                            {people.name}
                          </span>
                        </div>
                      </div>
                      <div>{people.cost}</div>
                    </div>
                  </m.div>
                )
            )}

          <m.div
            layout="position"
            key="debt"
            className="flex items-center justify-between w-full px-8 py-5 pb-4"
          >
            <div className="flex flex-col text-xl font-semibold">
              Buat data perhutangan
              <span className="text-xs font-normal text-neutral-500">
                Membuat list hutang
              </span>
            </div>

            {/* <PrimaryButton>Tambah</PrimaryButton> */}
          </m.div>

          {listPeople
            .filter((person) =>
              person.name.toLowerCase().includes(search.toLowerCase())
            )
            .map(
              (people, key) =>
                people.status === "Hutang" && (
                  <CardPeople
                    key={key}
                    people={people}
                    handleRemovePerson={handleRemovePerson}
                    handleMarkPaid={handleMarkPaid}
                    handleEditPerson={handleEditPerson}
                  />
                )
            )}

          <m.div layout="position" className="flex flex-col w-full px-4">
            <div className="flex flex-col w-full gap-2 p-4 bg-white drop-shadow-md rounded-xl">
              <div className="flex flex-col text-lg font-semibold">
                <span>Input Orang Hutang</span>
                <span className="text-xs font-normal">Masukan data</span>
              </div>
              <div className="flex flex-col gap-3 py-2">
                <div className="relative flex flex-col gap-1">
                  <TextInput
                    type="text"
                    id="person-name"
                    placeholder="person-name"
                    name="person_name"
                    autoComplete="person_name"
                    value={inputContainer.name}
                    onChange={(e) =>
                      setInputContainer({
                        ...inputContainer,
                        name: e.target.value,
                      })
                    }
                    className="placeholder-transparent peer"
                  />

                  <InputLabel
                    htmlFor="person-name"
                    value="Nama Orang Hutang"
                    className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
                  />

                  {/* <InputError message={errors?.email} className="text-xs" /> */}
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
                    value={inputContainer.cost}
                    onChange={(e) =>
                      setInputContainer({
                        ...inputContainer,
                        cost: e.target.value,
                      })
                    }
                    className="placeholder-transparent peer"
                  />

                  <InputLabel
                    htmlFor="total"
                    value="Total Biaya"
                    className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
                  />

                  {/* <InputError message={errors?.email} className="text-xs" /> */}
                </div>
              </div>
              <PrimaryButton onClick={() => handleAddPerson()}>
                Simpan
              </PrimaryButton>
            </div>
          </m.div>
        </AnimatePresence>
      </div>
    </>
  );
};

Index.layout = (page) => (
  <AuthenticatedLayout children={page} header="Perhutangan" />
);

export default Index;
