import UserForm from "@/components/ui/user-form/user-form";

import styles from './stules.module.scss';

export default function UserPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Профиль участника</h1>
      <UserForm />
    </div>
  )
}