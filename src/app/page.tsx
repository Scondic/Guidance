import Link from "next/link";

import AuthBlock from "@/components/auth-block/auth-block";
import { ROUTES } from "@/core/routes";

export default function Home() {
  return (
    <main>
      <Link href={ROUTES.application.users.path}>UsersScreen</Link>
      <AuthBlock />
    </main>
  );
}
