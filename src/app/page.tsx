import { Banner, Link } from "@/components/ui";

import styles from "./styles.module.scss";

export default function Home() {
  return (
    <main className={styles.Main}>
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
      <Link
        link={'/meeting'}>
        Добавить мероприятие
      </Link>
    </main>
  );
}
