// Yup
import * as yup from "yup";
// Yup

export const _validationSchema = () => {
  return yup.object({
    name: yup.string().min(3).required(),
    description: yup.string().min(5).required(),
    price: yup.number().min(1).required(),
    image: yup.string().min(1).required(),
  });
};
