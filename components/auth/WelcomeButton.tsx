import { StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { useTranslations } from '@/hooks/useTranslations'
import { fontSizes } from '@/constants/font'
import { MonoText } from '../ui/StyledText'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { BlurView } from 'expo-blur'
import { isEmailValid } from '@/utils/validation'

interface WelcomeButtonProps {
    email: string;
}

const WelcomeButton: React.FC<WelcomeButtonProps> = ({ email }) => {
    const dictionary = useTranslations()
    const isValid = isEmailValid(email)

    const handlePress = () => {
        router.push('/sign-in')
    }

    return (
        <BlurView intensity={isValid ? 70 : 30} tint={"extraLight"} style={styles.blur}>
            <TouchableOpacity onPress={handlePress} style={styles.container}>
                <MonoText style={styles.text}>
                    {dictionary('auth.explore')}
                </MonoText>
                <FontAwesome5 name='arrow-right' size={fontSizes.large} color='#FFFFFF' />
            </TouchableOpacity >
        </BlurView>
    )
}

export default WelcomeButton

const styles = StyleSheet.create({
    blur: {
        borderRadius: 20,
        overflow: 'hidden',
        width: '70%',
    },
    container: {
        paddingVertical: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        borderRadius: 20,
        shadowColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: fontSizes.xxLarge
    }
})