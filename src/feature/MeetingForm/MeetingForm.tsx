import InputField from "@/components/ui/Input/Form/InputField";
import { MultipleSelectField } from "@/components/ui/SelectField";
import withForm, { WrappedComponentProps } from "@/core/hoc/withForm";

import { schema } from "./schema";
import { opinionLeaders, optionsRoles } from "./static";

import styles from './styles.module.scss'

export function MeetingForm(props: WrappedComponentProps) {
  return (
    <>
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
      <div className={styles.container}>
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
          inputName={"meetingStart"}
          inputLabel={"Время окончания"}
          inputType={"time"}
          defaultValue={""}
        />
      </div>
      <div className={styles.containerLink}>
        <InputField
          control={props.control}
          inputName={"isRegNeeded"}
          inputLabel={"Требуется регистрация"}
          inputType={"checkbox"}
          defaultValue={""}
        />
        <InputField
          control={props.control}
          inputName={"meetingAddLink"}
          inputLabel={"Ссылка на доп.регистрацию"}
          defaultValue={""}
        />
      </div>
      <div className={styles.container}>
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
      </div>
      <MultipleSelectField
        control={props.control}
        selectName={"meetingSpeakers"}
        selectLabel={"Спикеры"}
        selectOptions={opinionLeaders}
      />
      <InputField
        control={props.control}
        inputName={"meetingSpeakerInfo"}
        inputLabel={"Регалии спикера"}
        defaultValue={""}
      />
      <MultipleSelectField
        control={props.control}
        selectName={"meetingTarget"}
        selectLabel={"Аудитория"}
        selectOptions={optionsRoles}
      />
      <InputField
        control={props.control}
        inputName={"meetingNotes"}
        inputLabel={"Заметки (для админа)"}
        defaultValue={""}
      />
    </>
  )
}

export default withForm(MeetingForm, schema)
