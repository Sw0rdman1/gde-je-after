import Button from '@/components/ui/Button';
import { useSession } from '@/context/SessionProvider';
import { useTranslations } from '@/hooks/useTranslations';
import { router } from 'expo-router';
import { useState } from 'react';
import { Text, View } from 'react-native';


export default function SignInScreen() {
    const { signInWithEmail } = useSession();
    const [loading, setLoading] = useState(false);
    const dictionary = useTranslations();

    const signIn = async () => {
        setLoading(true)
        const error = await signInWithEmail('vujasinovicb2019@gmail.com', 'Pass123!')
        setLoading(false)
        if (!error) {
            router.replace('/')
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Button
                title={dictionary('auth.login')}
                onPress={signIn}
                loading={loading}
            />
        </View>
    );
}
