import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { useTranslations } from '@/hooks/useTranslations'
import { fontSizes } from '@/constants/font'
import { MonoText } from '../ui/StyledText'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { BlurView } from 'expo-blur'


interface AuthButtonProps {
    handlePress: () => void;
    title: string;
    disabled?: boolean;
}

const AuthButton: React.FC<AuthButtonProps> = ({ handlePress, title, disabled }) => {
    const dictionary = useTranslations()

    if (disabled) {
        return (
            <BlurView intensity={60} tint={"light"} style={styles.blur}>
                <TouchableOpacity disabled style={styles.container}>
                    <MonoText style={styles.text}>
                        {dictionary(title)}
                    </MonoText>
                    <FontAwesome5 name='arrow-right' size={fontSizes.large} color='#FFFFFF' />
                </TouchableOpacity >
            </BlurView>
        )
    }

    return (
        <TouchableOpacity onPress={handlePress} style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
            <MonoText style={[styles.text, { color: "#212121" }]}>
                {dictionary(title)}
            </MonoText>
            <FontAwesome5 name='arrow-right' size={fontSizes.large} color='#212121' />
        </TouchableOpacity >
    )
}

export default AuthButton

const styles = StyleSheet.create({
    blur: {
        borderRadius: 25,
        overflow: 'hidden',
    },
    container: {
        paddingHorizontal: 40,
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        shadowColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 25,

    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: fontSizes.xxLarge
    }
})