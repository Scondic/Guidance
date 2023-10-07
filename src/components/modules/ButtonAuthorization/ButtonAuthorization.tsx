"use client"

import { useRouter } from 'next/navigation';

import { apiBaseUrl } from '@/core/constants';

import styles from './styles.module.css';

export const ButtonAuthorization = () => {
  const router = useRouter()

  const redirectAuthorization = () => {
    router.push(`${apiBaseUrl}/vk-auth-start`)
  }

  return (
    <button className={styles.authorization} onClick={redirectAuthorization}>Войти через ВК</button>
  )
}