import { InputField, MultipleSelectField } from "@/components/ui/form";
import { withForm, WrappedComponentProps } from "@/core/hoc";

import { schema } from "./schema";
import { opinionLeaders, optionsRoles } from "./static";

import classes from "./styles.module.scss";

export function Index(props: WrappedComponentProps) {
  return (
    <section className={classes.form}>
      <div className={classes.containerRow}>
        <InputField
          control={props.control}
          inputName={"meetingName"}
          inputLabel={"Название мероприятия"}
        />
        <InputField
          control={props.control}
          inputName={"meetingLink"}
          inputLabel={"Постоянная ссылка"}
          readOnly={true}
          defaultValue={"https://campweek.aozol.ru/"}
        />
      </div>
      <div className={classes.containerRow}>
        <InputField
          control={props.control}
          inputName={"meetingDate"}
          inputLabel={"Дата мероприятия"}
          inputType={"date"}
          defaultValue={""}
        />
        <InputField
          control={props.control}
          inputName={"meetingStart"}
          inputLabel={"Время начала"}
          inputType={"time"}
          defaultValue={""}
        />
        <InputField
          control={props.control}
          inputName={"meetingEnd"}
          inputLabel={"Время окончания"}
          inputType={"time"}
          defaultValue={""}
        />
      </div>
      <div className={classes.containerColumn}>
        <InputField
          control={props.control}
          inputName={"meetingAddLink"}
          inputLabel={"Ссылка на доп.регистрацию"}
          defaultValue={""}
        />
        <InputField
          control={props.control}
          inputName={"isRegNeeded"}
          inputLabel={"Требуется регистрация"}
          inputType={"checkbox"}
          defaultValue={""}
        />
      </div>
      <InputField
        control={props.control}
        inputName={"meetingDsc"}
        inputLabel={"Короткое описание"}
        defaultValue={""}
        inputType={"textarea"}
      />
      <InputField
        control={props.control}
        inputName={"meetingAddInfo"}
        inputLabel={"Дополнительная информация"}
        defaultValue={""}
        inputType={"textarea"}
      />
      <div className={classes.containerRow}>
        <MultipleSelectField
          control={props.control}
          selectName={"meetingSpeakers"}
          selectLabel={"Спикеры"}
          selectOptions={opinionLeaders}
        />
        <MultipleSelectField
          control={props.control}
          selectName={"meetingTarget"}
          selectLabel={"Аудитория"}
          selectOptions={optionsRoles}
        />
      </div>
      <InputField
        control={props.control}
        inputName={"meetingSpeakerInfo"}
        inputLabel={"Регалии спикера"}
        defaultValue={""}
      />
      <InputField
        control={props.control}
        inputName={"meetingNotes"}
        inputLabel={"Заметки (для админа)"}
        defaultValue={""}
      />
    </section>
  );
}

export default withForm(Index, {
  resolver: schema,
  buttonText: "Создать мероприятие",
});
