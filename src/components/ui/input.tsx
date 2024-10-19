/* eslint-disable @typescript-eslint/no-empty-object-type */
import * as React from "react";

import { cn } from "@/shared/lib/utils";
import { useField } from "formik";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isFormik?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, isFormik, ...props }, ref) => {
    const [field, meta] =
      isFormik && props.name ? useField({ name: props.name }) : [{}, {}];

    const [isValidBlur, setIsValidBlur] = React.useState(false);

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      // // Проверяем, если нет ошибок и есть значение
      if (!meta.error && e.target.value.trim().length > 0) {
        setIsValidBlur(true); // Устанавливаем состояние на true
      } else {
        setIsValidBlur(false); // Сбрасываем состояние, если есть ошибка или значение пустое
      }
    };

    return (
      <input
        type={type}
        className={cn(
          "flex h-[52px] w-full rounded-[8px] border border-[#EDEDED] border-input bg-[#F3F3F3] pl-[10px] font-[700] text-[#363636] outline-none transition-colors focus:border-[#D13A3A] disabled:cursor-not-allowed disabled:opacity-50",
          {
            "border-[#D13A3A] text-[#D13A3A]":
              isFormik && meta.touched && meta.error,
          },
          { "border-[#6CDE49]": isValidBlur }, // Успешный blur
          { ...(isFormik ? field : {}) },
          className,
        )}
        ref={ref}
        {...field}
        {...props}
        onBlur={handleBlur}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
