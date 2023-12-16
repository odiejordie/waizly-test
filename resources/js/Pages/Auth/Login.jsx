import { useEffect, useState } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import Register from "./Register";

export default function Login({ status, canResetPassword }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const [showPanel, setShowPanel] = useState({
    panel: "login",
  });

  useEffect(() => {
    return () => {
      reset("password");
    };
  }, []);

  const submit = (e) => {
    e.preventDefault();

    post(route("login"));
  };

  return (
    <GuestLayout>
      <Head title="Masuk Bang" />

      {status && (
        <div className="mb-4 font-medium text-sm text-green-600">{status}</div>
      )}

      {/* <form onSubmit={submit}>
        <div>
          <InputLabel htmlhtmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            isFocused={true}
            onChange={(e) => setData("email", e.target.value)}
          />

          <InputError message={errors.email} className="mt-2" />
        </div>

        <div className="mt-4">
          <InputLabel htmlhtmlFor="password" value="Password" />

          <TextInput
            id="password"
            type="password"
            name="password"
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="current-password"
            onChange={(e) => setData("password", e.target.value)}
          />

          <InputError message={errors.password} className="mt-2" />
        </div>

        <div className="block mt-4">
          <label className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", e.target.checked)}
            />
            <span className="ms-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ms-4" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form> */}

      <div className="flex p-2 h-full relative w-full flex-col justify-between bg-gray-100 shadow-2xl md:h-1/2 md:w-1/2 md:flex-row md:rounded-2xl md:bg-right">
        <div
          className={`flex h-1/2 z-50 flex-col relative transition-all ease-in-out duration-700 justify-between rounded-xl bg-white p-5 drop-shadow md:h-full md:w-1/2 ${
            showPanel?.panel === "login"
              ? "md:translate-x-full md:translate-y-0 translate-y-full"
              : "md:translate-x-0 md:translate-y-0 translate-y-0"
          }`}
        >
          <div className="font-silkscreen cursor-default text-right text-2xl uppercase text-gray-800 md:text-left transition-color hover:text-gray-600">
            <p>Meminjam</p>
            <p>Dengan</p>
            <p>Gaya</p>
          </div>
          <form onSubmit={submit} className="flex w-full flex-col gap-2">
            <h1 className="text-lg font-silkscreen cursor-default">Masuk...</h1>
            <div className="flex flex-col gap-1 relative">
              <TextInput
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                autoComplete="username"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                className="peer placeholder-transparent"
              />

              <InputLabel
                htmlFor="email"
                value="Email"
                className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
              />

              <InputError message={errors.email} className="text-xs" />
            </div>
            <div className="flex flex-col gap-1 relative">
              <TextInput
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="peer placeholder-transparent"
              />

              <InputLabel
                htmlFor="password"
                value="Password"
                className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
              />

              <InputError message={errors.password} className="text-xs" />
            </div>
            <PrimaryButton className="mt-1.5 w-full" disabled={processing}>
              Masuk
            </PrimaryButton>
          </form>
          {showPanel.panel !== "login" ? (
            <p
              onClick={() => setShowPanel({ ...showPanel, panel: "login" })}
              className="mt-5 cursor-pointer transition-color hover:text-gray-600 text-right text-xs text-gray-800"
            >
              Kalo sudah daftar mah tinggal masuk atuh.
            </p>
          ) : (
            <p className="mt-5 cursor-default text-right text-xs text-gray-800">
              Belum punya akun?{" "}
              <span
                onClick={() =>
                  setShowPanel({ ...showPanel, panel: "register" })
                }
                className="cursor-pointer font-bold hover:underline transition-color hover:text-gray-600"
              >
                Daftar Sekarang
              </span>
            </p>
          )}
        </div>

        <Register />
      </div>
    </GuestLayout>
  );
}
