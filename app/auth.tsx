import SignInScreen from '@/components/auth/SignInScreen';
import WelcomeButton from '@/components/auth/WelcomeButton';
import WelcomeEmailInput from '@/components/auth/WelcomeEmailInput';
import WelcomeScreen from '@/components/auth/WelcomeScreen';
import Container from '@/components/ui/Container';
import { MonoText } from '@/components/ui/StyledText';
import { View } from '@/components/ui/Themed';
import VideoBackground from '@/components/ui/VideoBackground';
import { AUTH_STATE } from '@/constants/Auth';
import { fontSizes } from '@/constants/font';
import { useTranslations } from '@/hooks/useTranslations';
import LanguagePicker from '@/i18n/LanguagePicker';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet } from 'react-native';



export default function Authentication() {
    const [email, setEmail] = useState('');
    const [authState, setAuthState] = useState<AUTH_STATE>(AUTH_STATE.WELCOME);

    const handleBack = () => {
        setAuthState(AUTH_STATE.WELCOME);
    }


    const renderContent = () => {
        switch (authState) {
            case AUTH_STATE.WELCOME:
                return <WelcomeScreen email={email} setEmail={setEmail} setAuthState={setAuthState} />;
            case AUTH_STATE.SIGN_IN:
                return <SignInScreen email={email} handleBack={handleBack} />;

            default:
                return <WelcomeScreen email={email} setEmail={setEmail} setAuthState={setAuthState} />;
        }
    }

    return (
        <VideoBackground>
            <StatusBar style='light' />
            {renderContent()}
        </VideoBackground>
    );

}


