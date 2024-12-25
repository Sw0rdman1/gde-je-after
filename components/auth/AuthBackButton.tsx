import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { fontSizes } from '@/constants/font';

interface AuthBackButtonProps {
    onPress: () => void;
}
const AuthBackButton: React.FC<AuthBackButtonProps> = ({ onPress }) => {
    const { top } = useSafeAreaInsets();

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { top: top + 20 }]}>
            <Ionicons name='chevron-back-circle' size={fontSizes.xxxLarge} color='#FFFFFF' />
        </TouchableOpacity>
    )
}

export default AuthBackButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 20,
        zIndex: 2,
    },
})