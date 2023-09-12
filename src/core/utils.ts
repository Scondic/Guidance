import { SelectOption } from "@/components/ui/SelectField/SelectField";

export const filterOptions = (
  options: SelectOption[],
  selectedValues?: string[],
) => {
  if (!selectedValues) {
    return [];
  }

  return options.filter((option) => selectedValues.includes(option.value));
};
