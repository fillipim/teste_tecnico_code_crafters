import React, { useRef } from "react";
import { Fieldset, DialogActionTrigger, Spinner } from "@chakra-ui/react";
import { AnySchema } from "yup";
import { useForm, Validator } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { yupValidator } from "@tanstack/yup-form-adapter";

import { createBank } from "@/services/bank.service";
import bankValidationSchema from "@/validations/bank.validation";

import Button from "@/components/Button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import FormFieldInput from "@/components/FormField";
import { toaster } from "@/components/ui/toaster";
import { queryClient } from "@/index";

const FormModal: React.FC = () => {
  const closeTriggerRef = useRef<HTMLButtonElement | null>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: createBank,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["banks"] });
      toaster.create({
        title: "Banco cadastrado!",
        type: "success",
      });
      closeTriggerRef.current?.click();
    },
  });

  const form = useForm<any, Validator<unknown, AnySchema>>({
    onSubmit: async ({ value }) => {
      try {
        mutate(value);
      } catch (error) {
        console.log(error);
      }
    },
    validatorAdapter: yupValidator(),
    validators: {
      onChange: bankValidationSchema,
      onSubmit: bankValidationSchema,
    },
  });

  return (
    <DialogRoot motionPreset="slide-in-bottom" onExitComplete={form.reset}>
      <DialogTrigger asChild>
        <Button>Registrar Banco</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cadastrar uma conta bancária</DialogTitle>
        </DialogHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <DialogBody>
            <Fieldset.Root size="lg" w="full">
              <Fieldset.Content>
                <FormFieldInput
                  type="text"
                  name="name"
                  label="Nome do banco"
                  FieldValue={form.Field}
                />

                <FormFieldInput
                  type="number"
                  name="account"
                  label="Número da conta"
                  FieldValue={form.Field}
                  maxLength={10}
                />
                <FormFieldInput
                  type="number"
                  name="branch"
                  label="Agência"
                  FieldValue={form.Field}
                  maxLength={4}
                />

                <FormFieldInput
                  type="number"
                  name="balance"
                  label="Saldo"
                  FieldValue={form.Field}
                  startElement="R$"
                />
              </Fieldset.Content>
            </Fieldset.Root>
          </DialogBody>
          <DialogFooter>
            <DialogActionTrigger asChild ref={closeTriggerRef}>
              <Button
                background="red.500"
                onClick={(e) => {
                  e.preventDefault();
                  form.reset();
                }}
              >
                Cancelar
              </Button>
            </DialogActionTrigger>
            <Button type="submit">{isPending ? <Spinner /> : "Salvar"}</Button>
          </DialogFooter>
        </form>
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};
export default FormModal;
