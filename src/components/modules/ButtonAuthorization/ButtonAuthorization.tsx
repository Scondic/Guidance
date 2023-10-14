"use client"

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui';
import { API_BASE_URL, API_VERSION } from '@/core/constants';

import styles from './styles.module.css';

export const ButtonAuthorization = () => {
  const router = useRouter()

  const redirectAuthorization = () => {
    router.push(`${API_BASE_URL}/api/${API_VERSION}/user/vk_auth_start`)
  }

  return (
    <Button className={styles.authorization} onClick={redirectAuthorization}>Войти через ВК</Button>
  )
}