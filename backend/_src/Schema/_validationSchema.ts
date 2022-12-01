// Yup
import * as yup from "yup";
// Yup

interface _validationSchemaArgType {
  name?: boolean;
  description?: boolean;
  price?: boolean;
  image?: boolean;
}
export const _validationSchema = (
  requiredFields?: _validationSchemaArgType
) => {
  return yup.object({
    id: yup.number().min(1).required(),

    name: requiredFields?.name
      ? yup.string().min(3).required()
      : yup.string().min(3).optional(),

    description: requiredFields?.description
      ? yup.string().min(5).required()
      : yup.string().min(5).optional(),

    price: requiredFields?.price
      ? yup.number().min(1).required()
      : yup.number().min(1).optional(),

    image: requiredFields?.image
      ? yup.string().min(1).required()
      : yup.string().optional(),
  });
};
