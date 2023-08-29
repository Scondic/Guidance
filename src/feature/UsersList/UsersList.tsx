"use client";

import { useUsers } from "@/hooks";
import Link from "next/link";

import { ROUTES } from "@/core/routes";

const UsersList = () => {
  const { data, isLoading, isError } = useUsers();

  return (
    <>
      <Link href={ROUTES.application.path}>Главная</Link>
      {isLoading && <h5>Загрузка данных...</h5>}
      {isError && <h5>При загрузке данных произошла ошибка</h5>}
      {data && data.map((user) => <p key={user.id}>{user.name}</p>)}
    </>
  );
};

export default UsersList;
