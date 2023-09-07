import { ComponentProps } from 'react';

import clsx from "clsx";

import styles from './styles.module.scss';

type FormElementProps = {
  label: string | undefined,
  // eslint-disable-next-line no-unused-vars
  error?: string
} & ComponentProps<'input'>;

export default function Input(props: FormElementProps) {
  const { label, error, ...rest } = props;

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={clsx(styles.input, {
          [styles.input__error]: !!error,
        })}
        {...rest}
      />
      <div className={styles.error}>{error}</div>
    </div>
  )
}
