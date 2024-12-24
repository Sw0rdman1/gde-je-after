import WelcomeButton from '@/components/auth/WelcomeButton';
import WelcomeEmailInput from '@/components/auth/WelcomeEmailInput';
import Container from '@/components/ui/Container';
import { MonoText } from '@/components/ui/StyledText';
import { View } from '@/components/ui/Themed';
import { AUTH_STATE } from '@/constants/Auth';
import { fontSizes } from '@/constants/font';
import { useTranslations } from '@/hooks/useTranslations';
import LanguagePicker from '@/i18n/LanguagePicker';
import { StyleSheet } from 'react-native';


interface WelcomeScreenProps {
    email: string;
    setEmail: (email: string) => void;
    setAuthState: (status: AUTH_STATE) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ email, setEmail, setAuthState }) => {
    const dictionary = useTranslations();



    return (
        <Container alignItems='center' justifyContent='flex-end' styles={styles.container}>
            <View style={styles.language}>
                <LanguagePicker />
            </View>
            <MonoText style={styles.title}>
                {dictionary('app.name')}
            </MonoText>
            <MonoText style={styles.subtitle}>
                {dictionary('app.description')}
            </MonoText>
            <WelcomeEmailInput email={email} setEmail={setEmail} />
            <WelcomeButton email={email} setAuthState={setAuthState} />
        </Container>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        gap: 20,
        zIndex: 2,
        marginBottom: 250,
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
