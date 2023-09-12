import { Control, FieldValues, useController } from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";
import { filterOptions } from "@/core/utils";

type MultipleSelectFieldProps = {
  value?: string[];
  control: Control<FieldValues, any>;
  selectName: string;
  selectLabel: string;
  selectOptions: SelectOption[];
};

const MultipleSelectField = (props: MultipleSelectFieldProps) => {
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
