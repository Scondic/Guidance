"use client";

import { InputField, MultipleSelectField, SingleSelectField } from "@/components/ui/form";
import { withForm, WrappedComponentProps } from "@/core/hoc";
import { useUserById } from "@/core/hooks";

import { schema } from "./schema";
import { optionsMeetings, optionsRoles } from "./static";

export function Index(props: WrappedComponentProps) {
  const { data: user, isLoading, isError } = useUserById(1);

  return (
    <>
      {isLoading && <h5>Загрузка данных...</h5>}
      {isError && <h5>При загрузке данных произошла ошибка</h5>}
      {user && (
        <>
          <InputField
            control={props.control}
            inputName={"firstName"}
            inputLabel={"Имя"}
            defaultValue={user.first_name}
          />
          <InputField
            control={props.control}
            inputName={"lastName"}
            inputLabel={"Фамилия"}
            defaultValue={user.last_name}
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
            defaultValue={user.sex.toString()}
          />
          <InputField
            control={props.control}
            inputName={"birthDate"}
            inputLabel={"Дата рождения"}
            inputType={"date"}
            defaultValue={user.bdate}
          />
          <InputField
            control={props.control}
            inputName={"city"}
            inputLabel={"Город проживания"}
            defaultValue={user.city}
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

export default withForm(Index, {
  resolver: schema,
});
