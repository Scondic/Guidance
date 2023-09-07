import * as z from "zod"

// const user = z.object({
//   value: z.string(),
//   label: z.string()
// });

const schema = z.object({
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
  // meeting: user.array().nonempty({
  //   message: "Выберите интересующие мероприятия"
  // }),
  // role: user.array().nonempty({
  //   message: "Выберерите роль",
  // }),
});

export { schema };