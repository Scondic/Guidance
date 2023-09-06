import { ChangeEventHandler, ComponentProps } from 'react';

import styles from './styles.module.scss';

type FormElementProps = {
  label: string | undefined,
  elementData: {
    name: string,
    type?: string
  },
  value: string,
  disabled?: boolean,
  readOnly?: boolean,
  handleOnChange: ChangeEventHandler<HTMLElement>;
} & ComponentProps<'input'>;

export default function Input(props: FormElementProps) {
  const { label, elementData, value, handleOnChange, disabled, readOnly, ...rest } = props;

  const elementProps = {
    type: elementData.type,
    id: elementData.name,
    className: styles.input,
    name: elementData.name,
    value,
    disabled,
    readOnly,
    onChange: handleOnChange,
    ...rest
  };

  return (
    <>
      {label && <label htmlFor={elementData.name} className={styles.label}>{label}</label>}
      <input {...elementProps} />
    </>
  )
}
