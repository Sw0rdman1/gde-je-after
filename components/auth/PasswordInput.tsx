import { StyleSheet, TextInput, View } from 'react-native'
import { fontSizes } from '@/constants/font'
import { FontAwesome } from '@expo/vector-icons';

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <FontAwesome name='lock' size={fontSizes.xxLarge} color={'#FFFFFF'} />
            </View>
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
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    icon: {
        width: 35,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        flex: 1,
        textAlignVertical: 'center',
        color: '#FFFFFF',
        fontFamily: 'shadows',
        fontSize: fontSizes.large,
    }
})