import { StyleSheet } from 'react-native'
import { Text, View } from '../ui/Themed'
import { Formik } from 'formik'
import InputField from '../ui/InputField'

const initialValues = {
    email: '',
    password: ''
}

const LogInForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View>
                    <InputField
                        label="Email"
                        placeholder="Enter your email"
                        value={values.email}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                    />
                </View>
            )}
        </Formik>
    )
}

export default LogInForm

const styles = StyleSheet.create({})