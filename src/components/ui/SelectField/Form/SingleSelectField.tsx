import { Control, FieldPath, FieldPathValue, FieldValues, useController } from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";

interface SingleSelectFieldProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> {
  control: Control<TFieldsValues>;
  selectName: TFieldName;
  selectLabel: string;
  selectOptions: SelectOption[];
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
}

const SingleSelectField = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: SingleSelectFieldProps<TFieldsValues, TFieldName>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.selectName,
    control: props.control,
    defaultValue: props.defaultValue,
  });

  return (
    <SelectField
      label={props.selectLabel}
      options={props.selectOptions}
      placeholder={props.selectLabel}
      description={error?.message}
      {...field}
    />
  );
};

export default SingleSelectField;
