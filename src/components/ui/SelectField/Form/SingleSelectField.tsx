import { Control, FieldValues, useController } from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";

type SingleSelectFieldProps<T> = {
  value?: string;
  control: Control<FieldValues, T>;
  selectName: keyof T;
  selectLabel: string;
  selectOptions: SelectOption[];
};

const SingleSelectField = <T extends Record<string, any> = {}>(
  props: SingleSelectFieldProps<T>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.selectName as string,
    control: props.control,
    defaultValue: props.value,
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
