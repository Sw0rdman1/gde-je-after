import { router } from 'expo-router';
import { Text, View } from 'react-native';


export default function SignInScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                onPress={() => {
                    router.replace('/');
                }}>
                Sign In
            </Text>
        </View>
    );
}
