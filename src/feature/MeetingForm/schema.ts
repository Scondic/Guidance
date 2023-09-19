import * as z from "zod";

const schema = z.object({
  meetingName: z.string({
    required_error: "Обязательно поле *"
  }),
  meetingLink: z.string().url(),
  meetingDate: z.coerce.date({
    errorMap: () => ({ message: "Укажите дату *" })
  }),
  meetingStart: z.coerce.date({
    errorMap: () => ({ message: "Укажите время *" })
  }),
  meetingEnd: z.coerce.date({
    errorMap: () => ({ message: "Укажите время *" })
  }),
  isRegNeeded: z.string(),
  meetingAddLink: z.string().url({ message: "Укажите корректную ссылку *" }),
  meetingDsc: z.string(),
  meetingAddInfo: z.string(),
  meetingSpeakers: z.array(z.string(), {
    required_error: "Обязательно поле *"
  }),
  meetingSpeakerInfo: z.string(),
  meetingTarget: z.array(z.string(), {
    required_error: "Обязательно поле *"
  }),
  meetingNotes: z.string(),
  meetingParticipants: z.array(z.string())
});

export { schema };
