import clsx from "clsx";

import styles from './styles.module.scss';

type Props = {
  label?: string;
  placeholder?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  error?: string;
  value?: string;
  type?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: string) => void;
  defaultValue?: string;
};

export default function Input(props: Props) {
  const {
    label,
    placeholder,
    error,
    value,
    type = 'text',
    onChange,
    defaultValue,
  } = props;

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        className={clsx(styles.input, {
          [styles.input__error]: !!error,
        })}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
      />
      <div className={styles.error}>{error}</div>
    </div>
  )
}
