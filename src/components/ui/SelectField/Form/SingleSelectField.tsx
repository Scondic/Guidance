import { Control, Controller, FieldValues } from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";

type MultipleSelectFieldProps<T> = {
  value?: any;
  controller: typeof Controller;
  control: Control<FieldValues, T>;
  selectName: string;
  selectLabel: string;
  selectOptions: SelectOption[];
};

const MultipleSelectField = <T extends Record<string, any> = {}>(
  props: MultipleSelectFieldProps<T>,
) => {
  const Controller = props.controller;

  return (
    <Controller
      name={props.selectName}
      control={props.control}
      render={({ field: { value, ...restField }, fieldState: { error } }) => (
        <SelectField
          description={error?.message}
          label={props.selectLabel}
          options={props.selectOptions}
          placeholder={props.selectLabel}
          value={value}
          {...restField}
        />
      )}
    />
  );
};

export default MultipleSelectField;
