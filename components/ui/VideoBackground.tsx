import { View } from '@/components/ui/Themed';
import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import { StyleSheet } from 'react-native';

interface VideoBackgroundProps {
    children: React.ReactNode;
}

const assetId = require('../../assets/videos/welcome.mp4');

const VideoBackground: React.FC<VideoBackgroundProps> = ({ children }) => {

    const videoSource: VideoSource = {
        assetId,
        metadata: {
            title: 'Big Buck Bunny',
            artist: 'The Open Movie Project',
        },
    }
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    return (
        <View style={styles.container}>
            <View style={styles.overlay} />
            <VideoView
                style={styles.video}
                player={player}
                nativeControls={false}
                contentFit='cover'
            />
            {children}
        </View>
    );
}

export default VideoBackground

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        zIndex: 1,
    },
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        zIndex: 0,
    }
})