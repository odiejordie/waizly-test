import { useEffect } from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(() => {
    return () => {
      reset("password", "password_confirmation");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("register"));
  };

  return (
    <div className="p-5 md:w-1/2 w-full h-1/2 md:h-full flex flex-col justify-between right-0">
      <div className="font-silkscreen cursor-default text-left md:text-right text-2xl uppercase text-gray-800 transition-color hover:text-gray-600">
        <p>Daftar Pinjam</p>
        <p>Meminjam</p>
      </div>
      <form onSubmit={submit} className="gap-2 flex flex-col">
        <h1 className="text-lg font-silkscreen cursor-default">Daftar...</h1>
        <div className="flex flex-col gap-1 relative">
          <TextInput
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            autoComplete="name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="peer placeholder-transparent bg-gray-100"
          />

          <InputLabel
            htmlFor="name"
            value="Name"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-800 peer-placeholder-shown:top-1.5"
          />

          <InputError message={errors.name} className="text-xs" />
        </div>

        <div className="flex flex-col gap-1 relative">
          <TextInput
            type="text"
            id="email"
            placeholder="Email"
            name="email"
            autoComplete="username"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="peer placeholder-transparent bg-gray-100"
          />

          <InputLabel
            htmlFor="email"
            value="Email"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-800 peer-placeholder-shown:top-1.5"
          />

          <InputError message={errors.email} className="text-xs" />
        </div>

        <div className="flex flex-col gap-1 relative">
          <TextInput
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            autoComplete="new-password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            className="peer placeholder-transparent bg-gray-100"
          />

          <InputLabel
            htmlFor="password"
            value="Password"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-800 peer-placeholder-shown:top-1.5"
          />

          <InputError message={errors.password} className="text-xs" />
        </div>

        <div className="flex flex-col gap-1 relative">
          <TextInput
            type="password"
            id="password_confirmation"
            placeholder="Password"
            name="password_confirmation"
            autoComplete="new-password"
            value={data.password_confirmation}
            onChange={(e) => setData("password_confirmation", e.target.value)}
            className="peer placeholder-transparent bg-gray-100"
          />

          <InputLabel
            htmlFor="password_confirmation"
            value="Confirm Password"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-800 peer-placeholder-shown:top-1.5"
          />

          <InputError
            message={errors.password_confirmation}
            className="text-xs"
          />
        </div>

        <div className="flex items-center justify-end mt-1">
          {/* <Link
            href={route("login")}
            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Already registered?
          </Link> */}

          <PrimaryButton className="mt-1.5 w-full" disabled={processing}>
            Daftar
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
