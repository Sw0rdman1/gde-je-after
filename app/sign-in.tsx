import { useSession } from '@/context/SessionProvider';
import { router } from 'expo-router';
import { Text, View } from 'react-native';


export default function SignInScreen() {
    const { signInWithEmail } = useSession();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => {
                signInWithEmail('vujasinovicb2019@gmail.com', 'Pass123!')
                router.replace('/')

            }}>
                Sign In
            </Text>
        </View>
    );
}
