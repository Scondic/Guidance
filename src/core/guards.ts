import { MultiValue, SingleValue } from "react-select";

import { SelectOption } from "@/components/ui/SelectField/SelectField";

export const isSingleFieldValues = (
  data: MultiValue<SelectOption> | SingleValue<SelectOption>,
): data is SingleValue<SelectOption> => Boolean(data && "value" in data);
