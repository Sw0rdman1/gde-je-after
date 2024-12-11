import { useVideoPlayer, VideoSource, VideoView } from 'expo-video';
import { StyleSheet } from 'react-native';

const assetId = require('../assets/videos/welcome.mp4');

const videoSource: VideoSource = {
    assetId,
    metadata: {
        title: 'Big Buck Bunny',
        artist: 'The Open Movie Project',
    },
}


export default function VideoScreen() {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    return (
        <VideoView
            style={styles.video}
            player={player}
            nativeControls={false}
            contentFit='cover'
        />
    );
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});
