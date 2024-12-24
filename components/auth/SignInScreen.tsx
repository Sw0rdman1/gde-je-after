import Container from '@/components/ui/Container';
import { MonoText } from '@/components/ui/StyledText';
import { View } from '@/components/ui/Themed';
import { fontSizes } from '@/constants/font';
import { useTranslations } from '@/hooks/useTranslations';
import LanguagePicker from '@/i18n/LanguagePicker';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import WelcomeEmailInput from './WelcomeEmailInput';
import WelcomeButton from './WelcomeButton';
import AuthBackButton from './AuthBackButton';


interface SignInScreenProps {
    email: string;
    handleBack: () => void;
}

const SignInScreen: React.FC<SignInScreenProps> = ({ email, handleBack }) => {
    const dictionary = useTranslations();


    return (
        <Container alignItems='flex-end' justifyContent='center' styles={styles.container}>
            <AuthBackButton onPress={handleBack} />
            <BlurView intensity={50} tint="light" style={styles.content}>
                <MonoText style={styles.title}>
                    {dictionary('auth.log-in')}
                </MonoText>
                <WelcomeEmailInput email={email} disabled />
                <WelcomeEmailInput email={email} disabled />
                <WelcomeButton email={email} setAuthState={() => { }} />
            </BlurView>
        </Container>
    );
}

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        zIndex: 2,
    },
    content: {
        height: '70%',
        width: '90%',
        paddingVertical: 30,
        paddingHorizontal: 20,
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
