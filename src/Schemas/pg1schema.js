import * as Yup from "yup"

export const page1Schema = Yup.object({
    name:Yup.string().min(3).max(20).required("Please enter a your name"),
    email:Yup.string().email().required("please enter your email"),
    number:Yup.string().min(10).max(10).required("please enter your phone number"),
    dob:Yup.date().max(new Date(),'Date of birth cannot be in future').required('Date of birth is required')
})