import { StyleSheet, TouchableOpacity } from 'react-native'
import { router } from 'expo-router'
import { useTranslations } from '@/hooks/useTranslations'
import { fontSizes } from '@/constants/font'
import { MonoText } from '../ui/StyledText'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const WelcomeButton = () => {
    const dictionary = useTranslations()

    const handlePress = () => {
        router.push('/sign-in')
    }


    return (
        <TouchableOpacity onPress={handlePress} style={styles.containers}>
            <MonoText style={styles.text}>
                {dictionary('auth.explore')}
            </MonoText>
            <FontAwesome5 name='arrow-right' size={fontSizes.large} color='#212121' />
        </TouchableOpacity >
    )
}

export default WelcomeButton

const styles = StyleSheet.create({
    containers: {
        marginTop: 20,
        backgroundColor: '#FFFFFF',
        paddingVertical: 5,
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 15,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text: {
        color: '#212121',
        fontWeight: 'bold',
        fontSize: fontSizes.xxLarge
    }
})