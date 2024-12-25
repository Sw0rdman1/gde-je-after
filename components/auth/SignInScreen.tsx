import Container from '@/components/ui/Container';
import { StyleSheet } from 'react-native';
import AuthBackButton from './AuthBackButton';
import Animated, { Easing, FlipInYRight, FlipOutYRight } from 'react-native-reanimated';
import { useAuth } from '@/context/AuthProvider';
import SignInForm from './SignInForm';

const ENTERING_ANIMATION = FlipInYRight.duration(300).easing(Easing.inOut(Easing.quad))
const EXITING_ANIMATION = FlipOutYRight.duration(300).easing(Easing.inOut(Easing.quad))

const SignInScreen = () => {
    const { handleBack } = useAuth();

    return (
        <Container alignItems='flex-end' justifyContent='center' styles={styles.container}>
            <AuthBackButton onPress={handleBack} />
            <Animated.View
                style={styles.animated}
                entering={ENTERING_ANIMATION}
                exiting={EXITING_ANIMATION}
            >
                <SignInForm />
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

});
