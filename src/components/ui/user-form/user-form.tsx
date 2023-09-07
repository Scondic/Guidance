'use client'
import { useForm, SubmitHandler } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import dayjs from 'dayjs';

import { Button } from "../Button/Button";
import Input from '../input/input';
import SelectElement from '../select/select';
import { schema } from './schema';
import { mockUser, optionsRoles, optionsSex, optionsMeetings, requiredData } from "./static";
import { FormDataType, OptionType } from './types';

import styles from './styles.module.scss';

export default function UserForm() {
  const date = dayjs(mockUser.birthDate).format('YYYY-MM-DD');
  const getSelectFormat = (value: string | number, options: typeof Option[]) => {
    return options.find(option => option.value == value);
  }
  const sexData = getSelectFormat(mockUser.sex, optionsSex);

  const data = { ...requiredData, ...mockUser, birthDate: date, sex: sexData };

  const { register, handleSubmit, control, formState: { errors } } = useForm<FormDataType>({ defaultValues: data, resolver: zodResolver(schema) });

  const handleOnSubmit: SubmitHandler<FormDataType> = (submitData) => {
    console.log(submitData);
  };

  return (
    <div>
      <form id="formElem" className={styles.form} onSubmit={handleSubmit(handleOnSubmit)}>
        <Input label={'Имя'} register={register('firstName')} error={errors.firstName?.message} />
        <Input label={'Фамилия'} register={register('lastName')} error={errors.lastName?.message} />
        <SelectElement label={'Пол'} name={'sex'} control={control} isMulti={false} options={optionsSex} defaultValue={data.sex} />
        <Input label={'Дата рождения'} type="date" register={register('birthDate')} error={errors.birthDate?.message} />
        <Input label={'Город'} register={register('city')} error={errors.city?.message} />
        <SelectElement label={'Мероприятия'} name={'meeting'} control={control} isMulti={true} options={optionsMeetings} />
        <SelectElement label={'Роль'} name={'role'} control={control} isMulti={true} options={optionsRoles} />

        <Button>Сохранить</Button>
      </form>
    </div>

  );
}
