import AuthButton from '@/components/auth/AuthButton';
import Container from '@/components/ui/Container';
import { MonoText } from '@/components/ui/StyledText';
import { View } from '@/components/ui/Themed';
import { fontSizes } from '@/constants/font';
import { useTranslations } from '@/hooks/useTranslations';
import LanguagePicker from '@/i18n/LanguagePicker';
import { StyleSheet } from 'react-native';
import EmailInput from './EmailInput';
import Animated, { Easing, FadeIn, FadeOut } from 'react-native-reanimated';
import { useAuth } from '@/context/AuthProvider';
import { isEmailValid } from '@/utils/validation';

const ENTERING_ANIMATION = FadeIn.duration(300).delay(200).easing(Easing.inOut(Easing.quad))
const EXITING_ANIMATION = FadeOut.duration(300).easing(Easing.inOut(Easing.quad))

const WelcomeScreen = () => {
    const dictionary = useTranslations();
    const { redirectUser, email } = useAuth();

    return (
        <Container alignItems='center' justifyContent='flex-start' >
            <View style={styles.language}>
                <LanguagePicker />
            </View>
            <Animated.View
                style={styles.container}
                entering={ENTERING_ANIMATION}
                exiting={EXITING_ANIMATION}
            >
                <MonoText style={styles.title}>
                    {dictionary('app.name')}
                </MonoText>
                <MonoText style={styles.subtitle}>
                    {dictionary('app.description')}
                </MonoText>
                <EmailInput />
                <AuthButton
                    handlePress={redirectUser}
                    title={'auth.explore'}
                    disabled={!isEmailValid(email)}
                />
            </Animated.View>
        </Container>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        alignItems: 'center',
        gap: 20,
        zIndex: 2,
    },
    language: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 60,
        right: 15,
        zIndex: 2,
    },
    title: {
        fontSize: fontSizes.title,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    subtitle: {
        fontSize: fontSizes.xLarge,
        textAlign: 'center',
        color: '#FFFFFF',
    },
});
