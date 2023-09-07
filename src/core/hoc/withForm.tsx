"use client";

import { ElementType } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui";

export type WrappedComponentProps = {
  errors: FieldErrors<FieldValues>;
  controller: typeof Controller;
  control: Control<FieldValues, any>;
};

export type WithFormProps = {
  formSubmittedCallback: (data: FieldValues) => void;
};

const withForm =
  <T extends Record<any, any>>(
    WrappedComponent: ElementType,
    resolver: z.infer<any>,
  ) =>
  (props: WithFormProps) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm<T>({
      resolver: zodResolver(resolver),
    });

    const onSubmit = async (data: FieldValues) => {
      props.formSubmittedCallback(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <WrappedComponent
          errors={errors}
          controller={Controller}
          control={control}
        />
        <Button type={"submit"}>Submit</Button>
      </form>
    );
  };

export default withForm;
