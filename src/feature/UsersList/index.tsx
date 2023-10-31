"use client";

import Link from "next/link";

import { useUsersAll } from "@/core/hooks";
import { ROUTES } from "@/core/routes";

const Index = () => {
  const { data, isLoading, isError } = useUsersAll();

  return (
    <>
      <Link href={ROUTES.application.path}>Главная</Link>
      {isLoading && <h5>Загрузка данных...</h5>}
      {isError && <h5>При загрузке данных произошла ошибка</h5>}
      {data && data.map((user) => <p key={user.id}>{user.first_name}</p>)}
    </>
  );
};

export default Index;
