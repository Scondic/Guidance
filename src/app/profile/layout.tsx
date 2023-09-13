import React from "react";

import styles from './styles.module.scss';

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Профиль участника</h2>
      {children}
    </main>
  )
}