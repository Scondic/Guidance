"use client";

import InputField from "@/components/ui/Input/Form/InputField";
import { MultipleSelectField, SingleSelectField } from "@/components/ui/SelectField";
import withForm, { WrappedComponentProps } from "@/core/hoc/withForm";
import { useAccountCookies, useUserById } from "@/core/hooks";

import { schema } from "./schema";
import { optionsMeetings, optionsRoles } from "./static";

export function UserForm(props: WrappedComponentProps) {
  const { account } = useAccountCookies();

  const { data, isLoading, isError } = useUserById(parseInt(account.sub));

  return (
    <>
      {isLoading && <h5>Загрузка данных...</h5>}
      {isError && <h5>При загрузке данных произошла ошибка</h5>}
      {data && (
        <>
          <InputField
            control={props.control}
            inputName={"firstName"}
            inputLabel={"Имя"}
            defaultValue={data.first_name}
          />
          <InputField
            control={props.control}
            inputName={"lastName"}
            inputLabel={"Фамилия"}
            defaultValue={data.last_name}
          />
          <SingleSelectField
            control={props.control}
            selectName={"sex"}
            selectLabel={"Пол"}
            selectOptions={[
              { value: "0", label: "Не указан" },
              { value: "1", label: "Женский" },
              { value: "2", label: "Мужской" },
            ]}
            defaultValue={data.sex.toString()}
          />
          <InputField
            control={props.control}
            inputName={"birthDate"}
            inputLabel={"Дата рождения"}
            inputType={"date"}
            defaultValue={data.bdate}
          />
          <InputField
            control={props.control}
            inputName={"city"}
            inputLabel={"Город проживания"}
            defaultValue={data.city}
          />
          <MultipleSelectField
            control={props.control}
            selectName={"roles"}
            selectLabel={"Роль"}
            selectOptions={optionsRoles}
            defaultValue={["counselor", "designer"]}
          />
          <MultipleSelectField
            control={props.control}
            selectName={"meetings"}
            selectLabel={"Мероприятия"}
            selectOptions={optionsMeetings}
            defaultValue={["game"]}
          />
        </>
      )}
    </>
  );
}

export default withForm(UserForm, {
  resolver: schema,
});
