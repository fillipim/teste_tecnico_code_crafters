import * as Yup from "yup";

const bankValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required("O nome do banco é obrigatório")
    .matches(/^\w+$/, "O nome do banco deve conter apenas letras e espaços"),
  account: Yup.string()
    .required("O número da conta é obrigatório")
    .matches(
      /^\d{5,10}$/,
      "O número da conta deve conter entre 5 e 10 dígitos numéricos"
    ),
  branch: Yup.string()
    .required("O número da agência é obrigatório")
    .matches(/^\d{4}$/, "O número da agência deve conter exatamente 4 dígitos"),
  balance: Yup.string()
    .required("O saldo é obrigatório")
    .matches(
      /^\d+(\.\d{1,2})?$/,
      "O saldo deve ser um número válido com até 2 casas decimais"
    ),
});

export default bankValidationSchema;
