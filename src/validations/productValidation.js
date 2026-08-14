import * as yup from "yup"

const productSchema = yup.object({
    title : yup.string().required().min(3),
    price : yup.number().required().positive(),
    image : yup.string().required().url(),
    category : yup.string().required().min(3),
    description : yup.string().required().min(3)
})

export default productSchema