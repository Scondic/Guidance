import { Control, Controller, FieldValues } from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";

type MultipleSelectFieldProps = {
  value?: any;
  controller: typeof Controller;
  control: Control<FieldValues, any>;
  selectName: string;
  selectLabel: string;
  selectOptions: SelectOption[];
};

const MultipleSelectField = (props: MultipleSelectFieldProps) => {
  const Controller = props.controller;

  return (
    <Controller
      name={props.selectName}
      control={props.control}
      render={({ field: { value, ...restField }, fieldState: { error } }) => (
        <SelectField
          isMulti
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
