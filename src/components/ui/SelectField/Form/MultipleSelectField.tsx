import {
  Control,
  FieldPath,
  FieldPathValue,
  FieldValues,
  useController,
} from "react-hook-form";

import type { SelectOption } from "@/components/ui/SelectField/SelectField";

import SelectField from "@/components/ui/SelectField/SelectField";
import { filterOptions } from "@/core/utils";

type MultipleSelectFieldProps<
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
> = {
  control: Control<TFieldsValues>;
  selectName: TFieldName;
  selectLabel: string;
  selectOptions: SelectOption[];
  defaultValue?: FieldPathValue<TFieldsValues, TFieldName>;
};

const MultipleSelectField = <
  TFieldsValues extends FieldValues = FieldValues,
  TFieldName extends FieldPath<TFieldsValues> = FieldPath<TFieldsValues>,
>(
  props: MultipleSelectFieldProps<TFieldsValues, TFieldName>,
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
      isMulti
      label={props.selectLabel}
      options={props.selectOptions}
      defaultValue={filterOptions(props.selectOptions, props.defaultValue)}
      placeholder={props.selectLabel}
      description={error?.message}
      {...field}
    />
  );
};

export default MultipleSelectField;
