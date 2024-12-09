import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import { Formik } from 'formik'
import InputField from '../ui/InputField'
import { loginValidationSchema } from '@/utils/validation'
import { useTranslations } from '@/hooks/useTranslations'
import Button from '../ui/Button'
import { useSession } from '@/context/SessionProvider'
import { router } from 'expo-router'

const initialValues = {
    email: '',
    password: ''
}

const LogInForm = () => {
    const { signInWithEmail } = useSession();
    const dictionary = useTranslations();

    const signIn = async () => {
        const error = await signInWithEmail('vujasinovicb2019@gmail.com', 'Pass123!')
        if (!error) {
            router.replace('/')
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={signIn}
            validationSchema={loginValidationSchema(dictionary)}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors, isSubmitting, isValid }) => (
                <View style={{ width: '100%', padding: 40 }}>
                    <InputField
                        label={dictionary('auth.email.label')}
                        placeholder={dictionary('auth.email.placeholder')}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        validate
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        errors={errors.email}
                    />
                    <Button
                        title={dictionary('auth.login')}
                        onPress={handleSubmit}
                        loading={isSubmitting}
                    />
                </View>
            )}
        </Formik>
    )
}

export default LogInForm

const styles = StyleSheet.create({})