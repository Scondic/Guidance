import Select from 'react-select';

import { customStyles } from './static';

import styles from './styles.module.scss';

type Option = {
  value: string | number,
  label: string
}

type FormElementProps = {
  label: string | undefined,
  isDisabled?: boolean,
  isMulti?: boolean,
  isSearchable?: boolean,
  options: readonly Option[],
  value?: string | number | undefined,
  // eslint-disable-next-line no-unused-vars
  handleChange: (selected: Option | readonly Option[], field: string) => void
};

export default function SelectElement(props: FormElementProps) {
  const { label, isMulti, isDisabled, options, value, isSearchable, handleChange } = props;

  return (
    <>
      {label && <label className={styles.label}>{label}</label>}
      <Select
        className={styles.select}
        isMulti={isMulti}
        isDisabled={isDisabled}
        options={options}
        styles={customStyles}
        isSearchable={isSearchable}
        defaultValue={value}
        onChange={handleChange}
      />
    </>
  )
}
