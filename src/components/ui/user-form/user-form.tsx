'use client'
import { useState, ChangeEvent, SyntheticEvent } from 'react';

import dayjs from 'dayjs';

import { Button } from "../Button/Button";
import Input from '../input/input';
import SelectElement from '../select/select';
import { mockUser, optionsRoles, formElements, optionsSex } from "./static";

import styles from './styles.module.scss';

type Option = {
  value: string | number,
  label: string
}

export default function UserForm() {
  const requiredData = {
    firstName: '',
    lastName: '',
    birthDate: '',
    sex: 0,
    city: '',
    role: [] as string[],
  };

  const date = dayjs(mockUser.birthDate).format('YYYY-MM-DD');
  const vkData = { ...requiredData, ...mockUser, birthDate: date };

  const [data, setData] = useState(vkData);

  const getSelectFormat = (value: string | number, options: Option[]) => {
    return options.find(option => option.value == value);
  }

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt: SyntheticEvent) => {
    evt.preventDefault();
    console.log(data);
  };

  const handleSelectChange = (selected: Option | readonly Option[]) => {
    let selectedData;
    if (Array.isArray(selected)) {
      selectedData = selected.map(option => option.value);
      setData({ ...data, 'role': selectedData });
    } else {
      selectedData = selected;
      setData({ ...data, 'sex': selectedData.value });
    }
  };

  return (
    <div>
      <form id="formElem" className={styles.form} onSubmit={handleSubmit}>
        <Input label={'Имя'} elementData={formElements.firstName} value={data.firstName} handleOnChange={handleChange} />
        <Input label={'Фамилия'} elementData={formElements.lastName} value={data.lastName} handleOnChange={handleChange} readOnly={true} />
        <SelectElement label={'Пол'} isMulti={false} isDisabled={false} handleChange={handleSelectChange} options={optionsSex} value={getSelectFormat(data.sex, optionsSex)} />
        <Input label={'Дата рождения'} elementData={formElements.birthDate} value={data.birthDate} handleOnChange={handleChange} />
        <Input label={'Город'} elementData={formElements.city} value={data.city} handleOnChange={handleChange} />
        <SelectElement label={'Роль'} isMulti={true} isDisabled={false} handleChange={handleSelectChange} options={optionsRoles} />

        <Button>Сохранить</Button>
      </form>
    </div>

  );
}
