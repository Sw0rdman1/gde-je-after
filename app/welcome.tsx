import Button from '@/components/ui/Button';
import Container from '@/components/ui/Container';
import { Text, View } from '@/components/ui/Themed';
import VideoBackground from '@/components/ui/VideoBackground';
import { StyleSheet } from 'react-native';


export default function WelcomeScreen() {
    return (
        <VideoBackground>
            <Container alignItems='center'>
                <Text style={styles.title}>Gde je After?</Text>
                <Button title='Prijavi se' onPress={() => { }} />
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
