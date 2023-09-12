import { Control, FieldValues, useController } from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";

type MultipleSelectFieldProps<T> = {
  value?: string;
  control: Control<FieldValues, T>;
  selectName: string;
  selectLabel: string;
  selectOptions: SelectOption[];
};

const SingleSelectField = <T extends Record<string, any> = {}>(
  props: MultipleSelectFieldProps<T>,
) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name: props.selectName,
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
