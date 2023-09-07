"use client";

import { SettingUserResolver } from "@/components/modules/static";
import {
  MultipleSelectField,
  SingleSelectField,
} from "@/components/ui/SelectField";
import withForm, { WrappedComponentProps } from "@/core/hoc/withForm";

const SettingsUser = (props: WrappedComponentProps) => {
  return (
    <>
      <SingleSelectField
        controller={props.controller}
        control={props.control}
        selectName={"sex"}
        selectLabel={"Введите Ваш пол"}
        selectOptions={[
          { value: "man", label: "Мужской" },
          { value: "woman", label: "Женский" },
        ]}
      />
      <MultipleSelectField
        controller={props.controller}
        control={props.control}
        selectName={"interests"}
        selectLabel={"Введите Ваши интересы"}
        selectOptions={[
          { value: "print", label: "Рисование" },
          { value: "build", label: "Строить" },
          { value: "broke", label: "Ломать" },
        ]}
      />
    </>
  );
};

export default withForm<{ sex: string }>(SettingsUser, SettingUserResolver);
