"use client";

import type { ActionMeta, MultiValue, SelectInstance, SingleValue } from "react-select";

import React, { Ref } from "react";
import { default as SelectNative } from "react-select";

import { isSingleFieldValues } from "@/core/guards";

import { ChipStyles, ControlStyles } from "./static";

import styles from "./styles.module.scss";

export type SelectOption = { value: string; label: string };

type Props = {
  label?: string;
  placeholder?: string;
  isMulti?: boolean;
  isSearchable?: boolean;
  description?: string;
  value?: string | SelectOption[];
  options: SelectOption[];
  onChange: (
    newValue: SingleValue<SelectOption> | MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>,
  ) => void;
  defaultValue?: SelectOption[];
};

const SelectField = (props: Props, ref: Ref<SelectInstance<SelectOption>> | undefined) => {
  const {
    label,
    placeholder,
    isMulti = false,
    isSearchable = true,
    description,
    value,
    options,
    onChange,
    defaultValue,
  } = props;

  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}
      <SelectNative
        ref={ref}
        styles={{
          control: (baseStyles) => ({
            ...baseStyles,
            ...ControlStyles,
          }),
          multiValueLabel: (baseStyles) => ({
            ...baseStyles,
            ...ChipStyles,
          }),
        }}
        isMulti={isMulti}
        isSearchable={isSearchable}
        options={options}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={props.options.find((c) => c.value === value)}
        onChange={(option, meta) =>
          isSingleFieldValues(option)
            ? // @ts-ignore
              onChange(option?.value, meta)
            : onChange(
                option.map((c: any) => c.value),
                meta,
              )
        }
      />
      {description && <div className={styles.error}>{description}</div>}
    </div>
  );
};

export default React.forwardRef(SelectField);
