import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { fontSizes } from '@/constants/font'
import Fontisto from '@expo/vector-icons/Fontisto';
import { isEmailValid } from '@/utils/validation';

interface WelcomeEmailInputProps {
    email: string;
    setEmail: (email: string) => void;
}

const WelcomeEmailInput: React.FC<WelcomeEmailInputProps> = ({ email, setEmail }) => {
    const backgroundColor = isEmailValid(email) ? '#4CAF5070' : 'rgba(255, 255, 255, 0.2)';
    const iconColor = isEmailValid(email) ? '#4CAF50' : '#FFFFFF';

    return (
        <View style={[styles.container, { backgroundColor }]}>
            <Fontisto name="email" size={fontSizes.xxLarge} color={iconColor} />
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
            />
        </View >
    )
}

export default WelcomeEmailInput

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        marginBlock: 20,
        width: '95%',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        color: '#FFFFFF',
        fontSize: fontSizes.xLarge,
        fontFamily: 'shadows',
        flex: 1,
    }
})