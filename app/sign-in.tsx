import Button from '@/components/ui/Button';
import InputField from '@/components/ui/InputField';
import { View } from '@/components/ui/Themed';
import { useSession } from '@/context/SessionProvider';
import { useTranslations } from '@/hooks/useTranslations';
import { router } from 'expo-router';
import { useState } from 'react';


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
            <InputField
                label={dictionary('auth.email.label')}
                placeholder={dictionary('auth.email.placeholder')}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Button
                title={dictionary('auth.login')}
                onPress={signIn}
                loading={loading}
            />
        </View>
    );
}
