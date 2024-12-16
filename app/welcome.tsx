import Container from '@/components/ui/Container';
import { MonoText } from '@/components/ui/StyledText';
import VideoBackground from '@/components/ui/VideoBackground';
import { fontSizes } from '@/constants/font';
import { useTranslations } from '@/hooks/useTranslations';
import { StyleSheet } from 'react-native';


export default function WelcomeScreen() {
    const dictionary = useTranslations();

    return (
        <VideoBackground>
            <Container alignItems='center' justifyContent='flex-end'>
                <MonoText style={styles.title}>
                    {dictionary('app.name')}
                </MonoText>
            </Container>
        </VideoBackground>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: fontSizes.title,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
