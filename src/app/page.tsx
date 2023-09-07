import Link from 'next/link';

import { Banner } from "@/components/ui";
import AuthBlock from "@/components/ui/auth-block/auth-block";
import Input from '@/components/ui/input/input';

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          margin: "0 auto",
          paddingBlock: "24px",
          rowGap: "24px",
        }}
      >
        <Banner
          subtitle={"Отменен"}
          title={"Тестовый эвент"}
          fullName={"Иванов Иван Иванович"}
          typeEvent={"Начинающие вожатые"}
        />
        <Banner
          subtitle={"24.04.2023 в 20:20"}
          title={"Тестовый эвент"}
          fullName={"Иванов Иван Иванович"}
          typeEvent={"Начинающие вожатые"}
        />
        <AuthBlock isSignedIn={true} />
        <AuthBlock isSignedIn={false} />
        <Input
          label='Имя'
        />
        <Link href="/profile">Профиль</Link>
      </div>
    </main>
  );
}
