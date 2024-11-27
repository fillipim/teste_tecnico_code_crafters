import React from "react";
import { FieldApi, FieldComponent, Validator } from "@tanstack/react-form";
import { Badge, Input } from "@chakra-ui/react";
import { AnySchema } from "yup";

import { Field, FieldProps } from "@/components/ui/field";
import { InputGroup } from "@/components/ui/input-group";

export interface FormFieldProps extends FieldProps {
  FieldValue: FieldComponent<unknown, Validator<unknown, AnySchema>>;
  name: string;
  type: string;
  maxLength?: number;
  startElement?: React.ReactNode | string;
  formatNumber?: boolean;
}

const FormFieldInput = React.forwardRef<HTMLDivElement, FormFieldProps>(
  (
    { label, FieldValue, name, type, maxLength, startElement, formatNumber },
    ref
  ) => {
    const handleInputValue = (
      e: React.ChangeEvent<HTMLInputElement>,
      field: FieldApi<
        unknown,
        string,
        undefined,
        Validator<unknown, AnySchema>,
        unknown
      >
    ) => {
      if (!maxLength || e.target.value.length <= maxLength) {
        field.handleChange(e.target.value);
      }
    };

    return (
      <FieldValue
        name={name}
        children={(field) => (
          <Field
            label={label}
            invalid={
              field.state.meta.errors.join(",").length > 0 &&
              field.state.meta.isTouched
            }
            errorText={field.state.meta.errors.join(",")}
            optionalText={
              <Badge size="xs" variant="surface">
                Obrigatório
              </Badge>
            }
          >
            <InputGroup startElement={startElement} w="full">
              <Input
                type={type}
                name={field.name}
                onBlur={field.handleBlur}
                value={field.state.value}
                onChange={(e) => handleInputValue(e, field)}
                maxLength={maxLength}
              />
            </InputGroup>
          </Field>
        )}
      />
    );
  }
);

export default FormFieldInput;
