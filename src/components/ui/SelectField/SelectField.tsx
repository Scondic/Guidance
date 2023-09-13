"use client";

import { default as SelectNative } from "react-select";

import styles from "./styles.module.scss";

export type SelectOption = { value: string; label: string };

type Props = {
  label?: string;
  placeholder?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  description?: string;
  value?: string | SelectOption[];
  options: SelectOption[];
  // eslint-disable-next-line no-unused-vars
  onChange: (newValue: SelectOption | SelectOption[]) => void;
  defaultValue?: SelectOption[];
};

export default function SelectField(props: Props) {
  const {
    label,
    placeholder,
    isMulti = false,
    isSearchable = true,
    description,
    value,
    options,
    onChange,
    defaultValue,
  } = props;

  return (
    <div className={styles.container}>
      {label && <label>{label}</label>}
      <SelectNative
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            padding: '20px',
          }),
        }}
        isMulti={isMulti}
        isSearchable={isSearchable}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={props.options.find((c) => c.value === value)}
        onChange={(e: any) =>
          e.value ? onChange(e.value) : onChange(e.map((c: any) => c.value))
        }
      />
      <div className={styles.error}>{description}</div>
    </div>
  );
}
