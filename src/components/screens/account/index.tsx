import { FieldValues } from "react-hook-form";

import UserForm from "@/feature/UserForm/UserForm";

export default function AccountScreen() {
  const formSubmittedCallback = async (formData: FieldValues) => {
    "use server";
    console.log(formData);
  };

  return <UserForm formSubmittedCallback={formSubmittedCallback} />;
}
