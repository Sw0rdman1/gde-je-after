import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface AuthBackButtonProps {
    onPress: () => void;
}
const AuthBackButton: React.FC<AuthBackButtonProps> = ({ onPress }) => {
    const { top } = useSafeAreaInsets();

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, { top: top + 40 }]}>
            <Ionicons name='chevron-back-circle' size={24} color='#FFFFFF' />
        </TouchableOpacity>
    )
}

export default AuthBackButton

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 60,
        left: 20,
        zIndex: 2,
    },
})