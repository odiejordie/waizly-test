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

    post(route("login"), { replace: true });
  };

  return (
    <GuestLayout>
      <Head title="Masuk Bang" />

      {status && (
        <div className="mb-4 text-sm font-medium text-green-600">{status}</div>
      )}

      {/* <form onSubmit={submit}>
        <div>
          <InputLabel htmlhtmlFor="email" value="Email" />

          <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="block w-full mt-1"
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
            className="block w-full mt-1"
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
            <span className="text-sm text-gray-600 ms-2">Remember me</span>
          </label>
        </div>

        <div className="flex items-center justify-end mt-4">
          {canResetPassword && (
            <Link
              href={route("password.request")}
              className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Forgot your password?
            </Link>
          )}

          <PrimaryButton className="ms-4" disabled={processing}>
            Log in
          </PrimaryButton>
        </div>
      </form> */}

      <div className="relative flex flex-col justify-between w-full h-full p-2 bg-gray-100 shadow-2xl md:h-1/2 md:w-1/2 md:flex-row md:rounded-2xl md:bg-right">
        <div
          className={`flex h-1/2 z-50 flex-col relative transition-all ease-in-out duration-700 justify-between rounded-xl bg-white p-5 drop-shadow md:h-full md:w-1/2 ${
            showPanel?.panel === "login"
              ? "md:translate-x-full md:translate-y-0 translate-y-full"
              : "md:translate-x-0 md:translate-y-0 translate-y-0"
          }`}
        >
          <div className="text-2xl text-right text-gray-800 uppercase cursor-default font-silkscreen md:text-left transition-color hover:text-gray-600">
            <p>Meminjam</p>
            <p>Dengan</p>
            <p>Gaya</p>
          </div>
          <form onSubmit={submit} className="flex flex-col w-full gap-2">
            <h1 className="text-lg cursor-default font-silkscreen">Masuk...</h1>
            <div className="relative flex flex-col gap-1">
              <TextInput
                type="text"
                id="email"
                placeholder="Email"
                name="email"
                autoComplete="username"
                value={data.email}
                onChange={(e) => setData("email", e.target.value)}
                className="placeholder-transparent peer"
              />

              <InputLabel
                htmlFor="email"
                value="Email"
                className="absolute bg-white text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
              />

              <InputError message={errors.email} className="text-xs" />
            </div>
            <div className="relative flex flex-col gap-1">
              <TextInput
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                autoComplete="current-password"
                value={data.password}
                onChange={(e) => setData("password", e.target.value)}
                className="placeholder-transparent peer"
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
              className="mt-5 text-xs text-right text-gray-800 cursor-pointer transition-color hover:text-gray-600"
            >
              Kalo sudah daftar mah tinggal masuk atuh.
            </p>
          ) : (
            <p className="mt-5 text-xs text-right text-gray-800 cursor-default">
              Belum punya akun?{" "}
              <span
                onClick={() =>
                  setShowPanel({ ...showPanel, panel: "register" })
                }
                className="font-bold cursor-pointer hover:underline transition-color hover:text-gray-600"
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
