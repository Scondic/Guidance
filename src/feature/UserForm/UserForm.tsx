import Input from '@/components/ui/Input/Input';
import {
  MultipleSelectField,
  SingleSelectField,
} from "@/components/ui/SelectField";
import withForm, { WrappedComponentProps } from "@/core/hoc/withForm";

import { schema } from "./schema";
import { optionsRoles, optionsMeetings } from "./static";
import { mockUser } from './static';


export function UserForm(props: WrappedComponentProps) {
  console.log(props.errors);

  return (
    <>
      <Input
        label='Имя'
        register={props.register('firstName')}
        error={props.errors.firstName?.message}
        defaultValue={mockUser.firstName}
      />
      <Input
        label='Фамилия'
        register={props.register('lastName')}
        error={props.errors.lastName?.message}
        defaultValue={mockUser.lastName}
      />
      <SingleSelectField
        control={props.control}
        selectName={"sex"}
        selectLabel={"Введите Ваш пол"}
        selectOptions={[
          { value: "2", label: "Мужской" },
          { value: "1", label: "Женский" },
        ]}
        value={mockUser.sex}
      />
      <Input
        label='Дата рождения'
        type='date'
        register={props.register('birthDate')}
        error={props.errors.date?.message}
        defaultValue={mockUser.birthDate}
      />
      <Input
        label='Город'
        register={props.register('city')}
        error={props.errors.city?.message}
        defaultValue={mockUser.city}
      />
      <MultipleSelectField
        control={props.control}
        selectName={"roles"}
        selectLabel={"Роль"}
        selectOptions={optionsRoles}
        value={mockUser.roles}
      />
      <MultipleSelectField
        control={props.control}
        selectName={"meetings"}
        selectLabel={"Мероприятия"}
        selectOptions={optionsMeetings}
        value={mockUser.meetings}
      />
    </>)
}

export default withForm(UserForm, schema);
