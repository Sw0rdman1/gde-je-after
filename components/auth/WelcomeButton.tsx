import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { router } from 'expo-router'
import { useTranslations } from '@/hooks/useTranslations'
import { fontSizes } from '@/constants/font'
import { MonoText } from '../ui/StyledText'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { BlurView } from 'expo-blur'
import { isEmailValid } from '@/utils/validation'
import { useSession } from '@/context/SessionProvider'

interface WelcomeButtonProps {
    email: string;
}

const WelcomeButton: React.FC<WelcomeButtonProps> = ({ email }) => {
    const dictionary = useTranslations()
    const isValid = isEmailValid(email)
    const { checkIfEmailExists } = useSession()

    const handlePress = async () => {
        // router.push('/sign-in')
        const exists = await checkIfEmailExists(email)
        console.log(exists)
    }

    if (!isValid) {
        return (
            <BlurView intensity={60} tint={"light"} style={styles.blur}>
                <TouchableOpacity disabled style={styles.container}>
                    <MonoText style={styles.text}>
                        {dictionary('auth.explore')}
                    </MonoText>
                    <FontAwesome5 name='arrow-right' size={fontSizes.large} color='#FFFFFF' />
                </TouchableOpacity >
            </BlurView>
        )
    }

    return (
        <View style={styles.blur}>
            <TouchableOpacity onPress={handlePress} style={[styles.container, { backgroundColor: '#FFFFFF' }]}>
                <MonoText style={[styles.text, { color: "#212121" }]}>
                    {dictionary('auth.explore')}
                </MonoText>
                <FontAwesome5 name='arrow-right' size={fontSizes.large} color='#212121' />
            </TouchableOpacity >
        </View>
    )
}

export default WelcomeButton

const styles = StyleSheet.create({
    blur: {
        borderRadius: 25,
        overflow: 'hidden',
        width: '60%',
    },
    container: {
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
    },
    text: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: fontSizes.xxLarge
    }
})