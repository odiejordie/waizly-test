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

    post(route("register"), { replace: true });
  };

  return (
    <div className="right-0 flex flex-col justify-between w-full p-5 md:w-1/2 h-1/2 md:h-full">
      <div className="text-2xl text-left text-gray-800 uppercase cursor-default font-silkscreen md:text-right transition-color hover:text-gray-600">
        <p>Daftar Waizly</p>
        <p>Assessment</p>
      </div>
      <form onSubmit={submit} className="flex flex-col gap-2">
        <h1 className="text-lg cursor-default font-silkscreen">Daftar...</h1>
        <div className="relative flex flex-col gap-1">
          <TextInput
            type="text"
            id="register-name"
            placeholder="Name"
            name="name"
            autoComplete="name"
            value={data.name}
            onChange={(e) => setData("name", e.target.value)}
            className="placeholder-transparent bg-gray-100 peer"
          />

          <InputLabel
            htmlFor="register-name"
            value="Name"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
          />

          <InputError message={errors.name} className="text-xs" />
        </div>

        <div className="relative flex flex-col gap-1">
          <TextInput
            type="text"
            id="register-email"
            placeholder="Email"
            name="email"
            autoComplete="username"
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="placeholder-transparent bg-gray-100 peer"
          />

          <InputLabel
            htmlFor="register-email"
            value="Email"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
          />

          <InputError message={errors.email} className="text-xs" />
        </div>

        <div className="relative flex flex-col gap-1">
          <TextInput
            type="password"
            id="register-password"
            placeholder="Password"
            name="password"
            autoComplete="new-password"
            value={data.password}
            onChange={(e) => setData("password", e.target.value)}
            className="placeholder-transparent bg-gray-100 peer"
          />

          <InputLabel
            htmlFor="register-password"
            value="Password"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
          />

          <InputError message={errors.password} className="text-xs" />
        </div>

        <div className="relative flex flex-col gap-1">
          <TextInput
            type="password"
            id="password-confirmation"
            placeholder="Password"
            name="password_confirmation"
            autoComplete="new-password"
            value={data.password_confirmation}
            onChange={(e) => setData("password_confirmation", e.target.value)}
            className="placeholder-transparent bg-gray-100 peer"
          />

          <InputLabel
            htmlFor="password-confirmation"
            value="Confirm Password"
            className="bg-gray-100 absolute text-xs left-2 border border-transparent -top-2 peer-placeholder-shown:text-sm peer-placeholder-shown:bg-transparent peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-1.5"
          />

          <InputError
            message={errors.password_confirmation}
            className="text-xs"
          />
        </div>

        <div className="flex items-center justify-end mt-1">
          {/* <Link
            href={route("login")}
            className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Already registered?
          </Link> */}

          <PrimaryButton
            id="register-submit-btn"
            className="mt-1.5 w-full"
            disabled={processing}
          >
            Daftar
          </PrimaryButton>
        </div>
      </form>
    </div>
  );
}
