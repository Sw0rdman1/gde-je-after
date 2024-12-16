import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

const FONTS = {
    'shadows': require('../assets/fonts/ShadowsIntoLight-Regular.ttf'),
    'marker': require('../assets/fonts/PermanentMarker-Regular.ttf'),
}

const loadFonts = async () => {
    try {
        await Font.loadAsync(FONTS);
    } catch (e) {
        console.warn(e);
    }
}

const VIDEOS = [
    require('../assets/videos/welcome.mp4'),
]

const loadVideos = async () => {
    try {
        await Promise.all(VIDEOS.map(video => Asset.fromModule(video).downloadAsync()));
    } catch (e) {
        console.warn(e);
    }
}


export const load = async () => {
    await Promise.all([
        loadFonts(),
        loadVideos(),
    ]);
}