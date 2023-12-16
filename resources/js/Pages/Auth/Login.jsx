import { useEffect } from "react";
import Checkbox from "@/Components/Checkbox";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
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
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            {/* <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600">Remember me</span>
                    </label>
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
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
            <div className="flex h-full w-full flex-col justify-between bg-gradient-to-tr from-gray-200 to-gray-100 p-2 shadow-2xl md:h-1/2 md:w-1/2 md:flex-row md:rounded-2xl md:bg-right">
                <div className="p-5 md:w-1/2"></div>
                <div className="flex h-1/2 flex-col justify-between rounded-xl bg-white p-5 drop-shadow md:h-full md:w-2/3">
                    <div className="font-silkscreen cursor-default text-right text-2xl uppercase text-gray-800 md:text-left transition-color hover:text-gray-600">
                        <p>Meminjam</p>
                        <p>Dengan</p>
                        <p>Gaya</p>
                    </div>
                    <form
                        onSubmit={submit}
                        className="flex w-full flex-col gap-2"
                    >
                        <div className="flex flex-col gap-1">
                            <input
                                type="text"
                                placeholder="Email"
                                name="email"
                                autoComplete="username"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                className="rounded-md text-gray-800 border p-1.5 px-2 text-sm outline-gray-500 placeholder:text-xs"
                            />

                            <InputError
                                message={errors.email}
                                className="text-xs"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="current-password"
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                className="rounded-md text-gray-800 border p-1.5 px-2 text-sm outline-gray-500 placeholder:text-xs"
                            />
                            <InputError
                                message={errors.password}
                                className="text-xs"
                            />
                        </div>
                        <div className="group/btn-login relative mt-1.5 w-full">
                            <button
                                type="submit"
                                disabled={processing}
                                className="font-silkscreen relative z-10 w-full rounded-md bg-gray-800 p-1.5 text-xs text-white outline-gray-500 transition-all hover:bg-gray-500 group-hover/btn-login:-translate-x-1 group-hover/btn-login:-translate-y-1"
                            >
                                {processing ? "Tunggu Man" : "Masuk"}
                            </button>
                            <div className="font-silkscreen absolute top-0 z-0 w-full rounded-md border border-gray-500 bg-transparent p-1 text-xs text-transparent transition-all group-hover/btn-login:translate-x-0.5 group-hover/btn-login:translate-y-0.5">
                                Masuk
                            </div>
                        </div>
                        <p className="mt-5 cursor-default text-right text-xs text-gray-800">
                            Belum punya akun?{" "}
                            <span className="cursor-pointer font-bold hover:underline transition-color hover:text-gray-600">
                                Daftar Sekarang
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
