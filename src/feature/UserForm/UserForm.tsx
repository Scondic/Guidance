import InputField from "@/components/ui/Input/Form/InputField";
import {
  MultipleSelectField,
  SingleSelectField,
} from "@/components/ui/SelectField";
import withForm, { WrappedComponentProps } from "@/core/hoc/withForm";

import { schema } from "./schema";
import { mockUser, optionsMeetings, optionsRoles } from "./static";


export function UserForm(props: WrappedComponentProps) {
  return (
    <>
      <InputField
        control={props.control}
        inputName={"firstName"}
        inputLabel={"Имя"}
        defaultValue={mockUser.firstName}
      />
      <InputField
        control={props.control}
        inputName={"lastName"}
        inputLabel={"Фамилия"}
        defaultValue={mockUser.lastName}
      />
      <SingleSelectField
        control={props.control}
        selectName={"sex"}
        selectLabel={"Пол"}
        selectOptions={[
          { value: "2", label: "Мужской" },
          { value: "1", label: "Женский" },
        ]}
        defaultValue={mockUser.sex}
      />
      <InputField
        control={props.control}
        inputName={"birthDate"}
        inputLabel={"Дата рождения"}
        inputType={"date"}
        defaultValue={mockUser.birthDate}
      />
      <InputField
        control={props.control}
        inputName={"city"}
        inputLabel={"Город проживания"}
        defaultValue={mockUser.city}
      />
      <MultipleSelectField
        control={props.control}
        selectName={"roles"}
        selectLabel={"Роль"}
        selectOptions={optionsRoles}
        defaultValue={mockUser.roles}
      />
      <MultipleSelectField
        control={props.control}
        selectName={"meetings"}
        selectLabel={"Мероприятия"}
        selectOptions={optionsMeetings}
        defaultValue={mockUser.meetings}
      />
    </>)
}

export default withForm(UserForm, schema);
