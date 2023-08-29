import Link from "next/link";

import { ROUTES } from "@/core/routes";

export default function Home() {
  return (
    <main>
      <Link href={ROUTES.application.users.path}>UsersScreen</Link>
    </main>
  );
}
