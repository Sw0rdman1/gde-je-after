import { StyleSheet, TextInput, View } from 'react-native'
import { fontSizes } from '@/constants/font'
import { isEmailValid } from '@/utils/validation';
import { useAuth } from '@/context/AuthProvider';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {

    return (
        <View style={styles.container}>
            <FontAwesome5 name='lock' size={fontSizes.xxLarge} color={'#FFFFFF'} />
            <TextInput
                style={styles.input}
                placeholder='Password'
                placeholderTextColor='#B0BEC5'
                textContentType='password'
                secureTextEntry={true}
                autoCapitalize='none'
                autoComplete='password'
                autoCorrect={false}
                importantForAutofill='yes'
                value={password}
                onChangeText={setPassword}
                submitBehavior='blurAndSubmit'
            />
        </View >
    )
}

export default PasswordInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        marginBlock: 20,
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    input: {
        color: '#FFFFFF',
        fontSize: fontSizes.xLarge,
        fontFamily: 'shadows',
        flex: 1,
    }
})