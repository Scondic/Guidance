"use client";

import { FieldValues } from "react-hook-form";

import SettingsUser from "@/components/modules/SettingsUser";
import { Banner } from "@/components/ui";

import styles from "./styles.module.scss";

export default function Home() {
  const formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };

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
      <SettingsUser formSubmittedCallback={formSubmittedCallback} />
    </main>
  );
}
