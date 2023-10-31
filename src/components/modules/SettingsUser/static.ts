import * as z from "zod";

export const SettingUserResolver = z.object({
  sex: z.string(),
  firstName: z.string(),
  interests: z.array(z.string()).nonempty(),
});
