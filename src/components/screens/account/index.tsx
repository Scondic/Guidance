"use client";

import { FieldValues } from "react-hook-form";

import UserForm from "@/feature/UserForm/UserForm";

export default function AccountScreen() {
  const formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return <UserForm formSubmittedCallback={formSubmittedCallback} />;
}
