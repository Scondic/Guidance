"use client";

import { SettingUserResolver } from "@/components/modules/static";
import {
  MultipleSelectField,
  SingleSelectField,
} from "@/components/ui/SelectField";
import withForm, { WrappedComponentProps } from "@/core/hoc/withForm";

type FormType = {
  sex: string;
  interests: string[];
};

const SettingsUser = (props: WrappedComponentProps<FormType>) => {
  const SingleSelectValue = "male";
  const MultipleSelectValue = ["print", "broke"];

  const sexOptions = [
    { value: "male", label: "Мужской" },
    { value: "female", label: "Женский" },
  ];

  const interestsOptions = [
    { value: "print", label: "Рисование" },
    { value: "build", label: "Строить" },
    { value: "broke", label: "Ломать" },
  ];

  return (
    <>
      <SingleSelectField
        control={props.control}
        defaultValue={SingleSelectValue}
        selectName={"sex"}
        selectLabel={"Введите Ваш пол"}
        selectOptions={sexOptions}
      />
      <MultipleSelectField
        control={props.control}
        defaultValue={MultipleSelectValue}
        selectName={"interests"}
        selectLabel={"Введите Ваши интересы"}
        selectOptions={interestsOptions}
      />
    </>
  );
};

export default withForm<FormType>(SettingsUser, SettingUserResolver);
