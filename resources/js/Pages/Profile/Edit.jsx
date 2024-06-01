import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DeleteUserForm from "./Partials/DeleteUserForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import UpdateProfileInformationForm from "./Partials/UpdateProfileInformationForm";
import { Head } from "@inertiajs/react";

export default function Edit({ auth, mustVerifyEmail, status }) {
  return (
    <>
      <Head title="Profile" />

      <div className="px-8 py-24 pb-28">
        <div className="mx-auto space-y-6 max-w-7xl">
          <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
            <UpdateProfileInformationForm
              mustVerifyEmail={mustVerifyEmail}
              status={status}
              className="max-w-xl"
            />
          </div>

          <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
            <UpdatePasswordForm className="max-w-xl" />
          </div>

          <div className="p-4 bg-white shadow sm:p-8 sm:rounded-lg">
            <DeleteUserForm className="max-w-xl" />
          </div>
        </div>
      </div>
    </>
  );
}

Edit.layout = (page) => (
  <AuthenticatedLayout children={page} header="Profile" />
);
