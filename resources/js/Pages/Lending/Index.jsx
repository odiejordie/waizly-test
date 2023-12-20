import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

const Index = ({ auth }) => {
  return (
    <>
      <Head title="Pinjaman" />

      <div>Pinjam</div>
    </>
  );
};

Index.layout = (page) => (
  <AuthenticatedLayout children={page} header="Pinjaman" />
);

export default Index;
