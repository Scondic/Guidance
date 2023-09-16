import { ComponentProps } from "react";
import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  useController,
} from "react-hook-form";

import Input from "../Input";

interface InputFieldProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  inputName: TFieldName;
  inputLabel: string;
  inputType?: ComponentProps<"input">["type"];
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const InputField = <TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>>(
    props: InputFieldProps<TFieldsValues, TFieldName>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.inputName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  return (
    <Input
      label={props.inputLabel}
      type={props.inputType}
      placeholder={props.inputLabel}
      error={error?.message}
      {...field}
    />
  )
}
export default InputField;
