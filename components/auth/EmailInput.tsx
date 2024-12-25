import { StyleSheet, TextInput, View } from 'react-native'
import { fontSizes } from '@/constants/font'
import Fontisto from '@expo/vector-icons/Fontisto';
import { isEmailValid } from '@/utils/validation';
import { useAuth } from '@/context/AuthProvider';

interface EmailInputProps {
    disabled?: boolean;
}

const EmailInput: React.FC<EmailInputProps> = ({ disabled }) => {
    const { email, setEmail } = useAuth();

    const backgroundColor = disabled ? 'rgba(255, 255, 255, 0.05)' : isEmailValid(email) ? '#4CAF5070' : 'rgba(255, 255, 255, 0.2)';
    const iconColor = (!disabled && isEmailValid(email)) ? '#4CAF50' : '#FFFFFF';

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <View style={styles.icon}>
                <Fontisto name="email" size={fontSizes.xxLarge} color={iconColor} />
            </View>
            <TextInput
                style={styles.input}
                placeholder='Email'
                placeholderTextColor='#B0BEC5'
                keyboardType='email-address'
                textContentType='emailAddress'
                autoCapitalize='none'
                autoComplete='email'
                autoCorrect={false}
                importantForAutofill='yes'
                value={email}
                onChangeText={setEmail}
                submitBehavior='blurAndSubmit'
                editable={!disabled}
            />
        </View >
    )
}

export default EmailInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    icon: {
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        color: '#FFFFFF',
        fontSize: fontSizes.xLarge,
        fontFamily: 'shadows',
        flex: 1,
    }
})