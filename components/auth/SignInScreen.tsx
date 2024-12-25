import Container from '@/components/ui/Container';
import { MonoText } from '@/components/ui/StyledText';
import { fontSizes } from '@/constants/font';
import { useTranslations } from '@/hooks/useTranslations';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import WelcomeEmailInput from './WelcomeEmailInput';
import WelcomeButton from './WelcomeButton';
import AuthBackButton from './AuthBackButton';
import Animated, { BounceInRight, Easing, FlipInYRight, FlipOutYRight, RotateInUpRight } from 'react-native-reanimated';


interface SignInScreenProps {
    email: string;
    handleBack: () => void;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ email, handleBack }) => {
    const dictionary = useTranslations();


    return (
        <Container alignItems='flex-end' justifyContent='center' styles={styles.container}>
            <AuthBackButton onPress={handleBack} />
            <Animated.View
                style={styles.animated}
                entering={FlipInYRight.duration(300).easing(Easing.inOut(Easing.quad))}
                exiting={FlipOutYRight.duration(300).easing(Easing.inOut(Easing.quad))}
            >
                <BlurView intensity={50} tint="light" style={styles.content}>
                    <MonoText style={styles.title}>
                        {dictionary('auth.log-in')}
                    </MonoText>
                    <WelcomeEmailInput email={email} disabled />
                    <WelcomeEmailInput email={email} disabled />
                    <WelcomeButton email={email} setAuthState={() => { }} />
                </BlurView>
            </Animated.View>
        </Container >
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
    },
    animated: {
        height: '70%',
        width: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        paddingVertical: 30,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        gap: 20,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        overflow: 'hidden',
    },
    title: {
        fontSize: fontSizes.title,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    email: {
        color: '#FFFFFF',
        fontSize: fontSizes.xLarge,
    }
});
