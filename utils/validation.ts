import * as Yup from 'yup'

export const isEmailValid = (email: string) => {
    if (!email) return false
    return Yup.string().email().isValidSync(email)
}


export const loginValidationSchema = (dictionary: any) => Yup.object().shape({
    email: Yup.string()
        .email(dictionary('auth.email.error.invalid'))
        .required(dictionary('auth.email.error.required')),
    // password: Yup.string()
    //     .min(6, dictionary('auth.password.error.min'))
    //     .required(dictionary('auth.password.error.required'))
})
