'use client'
import { FieldValues } from "react-hook-form";

import MeetingForm from "@/feature/MeetingForm/MeetingForm";

export default function UserPage() {
  const formSubmittedCallback = (formData: FieldValues) => {
    // eslint-disable-next-line no-console
    console.log(formData);
  };

  return <MeetingForm formSubmittedCallback={formSubmittedCallback} />
}