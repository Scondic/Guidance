import { Controller, Control, FormDataType } from 'react-hook-form';
import Select from 'react-select';

import { customStyles } from './static';

import styles from './styles.module.scss';

type FormElementProps = {
  label: string | undefined,
  isMulti?: boolean,
  isSearchable?: boolean,
  options: readonly typeof Option[],
  value?: string | number | undefined,
  control: Control<FormDataType, any>
  name: string,
} & any;

const handleSelectChange = (selected: OptionType | readonly OptionType[], field: string) => {
  console.log(selected, field)
  let selectedData;
  switch (field) {
    case 'role':
      return ({ 'role': selectedData });
    case 'sex':
      selectedData = selected;
      return ({ 'sex': selectedData.value });
    case 'meeting':
      return ({ 'meeting': selectedData });
    default:
      break;
  }
};

export default function SelectElement(props: FormElementProps) {
  const { label, name, control, isMulti, defaultValue, options, isSearchable } = props;

  return (
    <div>
      {label && <label className={styles.label}>{label}</label>}
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange }, fieldState: { error } }) => (
          <div className={styles.container}>
            <Select
              // isClearable
              options={options}
              styles={customStyles}
              // isSearchable={isSearchable}
              defaultValue={defaultValue}
              className={styles.select}
              isMulti={isMulti}
              onChange={(option) => onChange(handleSelectChange(option, name))}
            />
            <div className={styles.error}>{error && 'ошибка'}</div>
          </div>

        )}
      />
      {/* <Select

        // options={options}

        onChange={handleChange}
      /> */}
    </div>
  )
}
