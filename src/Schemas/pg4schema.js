import * as Yup from "yup"

export const page4Schema = Yup.object({
    date:Yup.date().max(new Date(),'Date  cannot be in future').required('Date is required')
})