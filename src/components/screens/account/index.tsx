"use client"
import { FieldValues } from "react-hook-form";

import UserForm from "@/feature/UserForm/UserForm";

import { useUserById } from "@/core/hooks";

export default function AccountScreen() {
  const { data, isLoading, isError } = useUserById(1);
    
  const formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return  (
    <>
      {isLoading && <h5>Загрузка данных...</h5>}
      {isError && <h5>При загрузке данных произошла ошибка</h5>}
      {data && <UserForm formSubmittedCallback={formSubmittedCallback} />}
      {/* <UserForm formSubmittedCallback={formSubmittedCallback} /> */}
    </>
  );
}