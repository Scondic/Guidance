import * as z from "zod"

const schema = z.object({
  sex: z.enum(['1', '2']),
  firstName: z.string()
    .min(1, {
      message: "Обязательное поле *",
    })
    .max(50, {
      message: "Имя превысело допустимое количество знаков *",
    }),
  lastName: z.string()
    .min(1, {
      message: "Обязательное поле *",
    })
    .max(50, {
      message: "Имя превысело допустимое количество знаков *",
    }),
  birthDate: z.string(),
  city: z.string()
    .min(1, {
      message: "Обязательное поле *",
    }),
  roles: z.array(z.string()).nonempty({
    message: "Выберите роль"
  }),
  meetings: z.array(z.string()).nonempty({
    message: "Выберите интересующие мероприятия"
  }),
});

export { schema };