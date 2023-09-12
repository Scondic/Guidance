import { Control, FieldValues, useController } from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";
import { filterOptions } from "@/core/utils";

type MultipleSelectFieldProps<T> = {
  value?: string[];
  control: Control<FieldValues, T>;
  selectName: keyof T;
  selectLabel: string;
  selectOptions: SelectOption[];
};

const MultipleSelectField = <T extends Record<string, any> = {}>(
  props: MultipleSelectFieldProps<T>,
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
      isMulti
      label={props.selectLabel}
      options={props.selectOptions}
      defaultValue={filterOptions(props.selectOptions, props.value)}
      placeholder={props.selectLabel}
      description={error?.message}
      {...field}
    />
  );
};

export default MultipleSelectField;
