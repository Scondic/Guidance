"use client";

import { ElementType } from "react";
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Button } from "@/components/ui";

export type WrappedComponentProps = {
  errors: FieldErrors<FieldValues>;
  controller: typeof Controller;
  control: Control<FieldValues, any>;
  register?: UseFormRegisterReturn;
};

export type WithFormProps = {
  // eslint-disable-next-line no-unused-vars
  formSubmittedCallback: (data: FieldValues) => void;
};

const withForm =
  <T extends Record<any, any>>(
    WrappedComponent: ElementType,
    resolver: z.infer<any>,
  ) =>
    // eslint-disable-next-line react/display-name
    (props: WithFormProps) => {
      const {
        register,
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
            control={control}
            register={register}
          />
          <Button type={"submit"}>Submit</Button>
        </form>
      );
    };

export default withForm;
