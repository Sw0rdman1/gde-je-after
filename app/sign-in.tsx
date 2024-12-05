import { useSession } from '@/context/SessionProvider';
import { Text, View } from 'react-native';


export default function SignInScreen() {
    const { signInWithEmail } = useSession();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => signInWithEmail('boza', 'boza')}>
                Sign In
            </Text>
        </View>
    );
}
