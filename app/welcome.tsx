import { Text, View } from '@/components/ui/Themed';
import VideoBackground from '@/components/ui/VideoBackground';
import { StyleSheet } from 'react-native';


export default function VideoScreen() {

    return (
        <VideoBackground>
            <View style={styles.content}>
                <Text style={styles.title}>Gde je After?</Text>
                <Text style={styles.subtitle}>
                    After je tu da ti pomogne da pronađeš najbolje mesto za izlazak u tvom gradu.
                </Text>
            </View>
        </VideoBackground>
    );

}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        textAlign: 'center',
    },

});
