import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native'
import { fontSizes } from '@/constants/font'
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

interface PasswordInputProps {
    password: string;
    setPassword: (password: string) => void;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ password, setPassword }) => {
    const [isVisible, setIsVisible] = useState(false)

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
                secureTextEntry={!isVisible}
                autoCapitalize='none'
                autoComplete='password'
                autoCorrect={false}
                importantForAutofill='yes'
                value={password}
                onChangeText={setPassword}
                submitBehavior='blurAndSubmit'
            />
            <TouchableOpacity style={styles.icon} onPress={() => setIsVisible(!isVisible)}>
                <Ionicons name={isVisible ? 'eye-off' : 'eye'} size={fontSizes.xLarge} color={'#FFFFFF'} />
            </TouchableOpacity>
        </View>
    )
}

export default PasswordInput

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '100%',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        gap: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    icon: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 5,
        flex: 1,
        textAlignVertical: 'center',
        color: '#FFFFFF',
        fontFamily: 'shadows',
        fontSize: fontSizes.large,
    }
})