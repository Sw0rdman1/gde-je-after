import { StyleSheet } from 'react-native'
import { Formik } from 'formik'
import { loginValidationSchema } from '@/utils/validation'
import { useTranslations } from '@/hooks/useTranslations'
import { useSession } from '@/context/SessionProvider'
import { router } from 'expo-router'
import { BlurView } from 'expo-blur'
import { MonoText } from '../ui/StyledText'
import { fontSizes } from '@/constants/font'
import { useAuth } from '@/context/AuthProvider'
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import AuthButton from './AuthButton'
import { useToast } from '@/context/ToastContext'

const SignInForm = () => {
    const { signInWithEmail } = useSession();
    const { email } = useAuth();
    const { showToast } = useToast();
    const dictionary = useTranslations();

    const initialValues = {
        email,
        password: ''
    }

    const signIn = async (values: { email: string, password: string }) => {
        const error = await signInWithEmail(email, values.password)

        if (!error) {
            router.replace('/')
        } else {
            showToast(dictionary(`auth.error.${error}`), 'error')
        }
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={signIn}
            validationSchema={loginValidationSchema(dictionary)}
        >
            {({ handleChange, handleSubmit, values, errors, isSubmitting }) => (
                <BlurView intensity={50} tint="light" style={styles.content}>
                    <MonoText style={styles.title}>
                        {dictionary('auth.log-in')}
                    </MonoText>
                    <EmailInput
                        disabled
                    />
                    <PasswordInput
                        password={values.password}
                        setPassword={handleChange('password')}
                    />
                    <AuthButton
                        title='auth.log-in'
                        handlePress={handleSubmit}
                        disabled={isSubmitting || !!errors.password}
                    />
                </BlurView>
            )}
        </Formik>
    )
}

export default SignInForm

const styles = StyleSheet.create({
    content: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        gap: 25,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        overflow: 'hidden',
    },
    title: {
        fontSize: fontSizes.title,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
})