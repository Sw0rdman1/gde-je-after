import Container from '@/components/ui/Container';
import { MonoText } from '@/components/ui/StyledText';
import { View } from '@/components/ui/Themed';
import VideoBackground from '@/components/ui/VideoBackground';
import { fontSizes } from '@/constants/font';
import { useTranslations } from '@/hooks/useTranslations';
import LanguagePicker from '@/i18n/LanguagePicker';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';


export default function WelcomeScreen() {
    const dictionary = useTranslations();

    return (
        <VideoBackground>
            <StatusBar style='light' />
            <Container alignItems='center' justifyContent='center' styles={styles.container}>
                <View style={styles.language}>
                    <LanguagePicker />
                </View>
                <MonoText style={styles.title}>
                    {dictionary('app.name')}
                </MonoText>
                <MonoText style={styles.subtitle}>
                    {dictionary('app.description')}
                </MonoText>
            </Container>
        </VideoBackground>
    );

}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        gap: 20,
        zIndex: 2,
    },
    language: {
        backgroundColor: 'transparent',
        position: 'absolute',
        top: 50,
        right: 10,
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
