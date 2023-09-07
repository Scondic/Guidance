import { ComponentProps } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

import styles from './styles.module.scss';
import clsx from "clsx";

type FormElementProps = {
  label: string | undefined,
  // eslint-disable-next-line no-unused-vars
  register: UseFormRegisterReturn,
  error?: string
} & ComponentProps<'input'>;

export default function Input(props: FormElementProps) {
  const { label, register, error, ...rest } = props;


  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={clsx(styles.input, {
          [styles.input__error]: !!error,
        })}
        {...register}
        {...rest}
      />
      <div className={styles.error}>{error}</div>
    </div>
  )
}
