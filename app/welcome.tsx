import Container from '@/components/ui/Container';
import { Text } from '@/components/ui/Themed';
import VideoBackground from '@/components/ui/VideoBackground';
import { useTranslations } from '@/hooks/useTranslations';
import { StyleSheet } from 'react-native';


export default function WelcomeScreen() {
    const dictionary = useTranslations();

    return (
        <VideoBackground>
            <Container alignItems='center' justifyContent='center'>
                <Text style={styles.title}>
                    {dictionary('app.name')}
                </Text>
            </Container>
        </VideoBackground>
    );

}

const styles = StyleSheet.create({
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 10,
    },
});
