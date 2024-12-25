import SignInScreen from '@/components/auth/SignInScreen';
import WelcomeScreen from '@/components/auth/WelcomeScreen';
import VideoBackground from '@/components/ui/VideoBackground';
import { AUTH_STATE } from '@/constants/Auth';
import { useAuth } from '@/context/AuthProvider';
import { StatusBar } from 'expo-status-bar';


export default function Authentication() {
    const { authState } = useAuth();

    const renderContent = () => {
        switch (authState) {
            case AUTH_STATE.WELCOME:
                return <WelcomeScreen />;
            case AUTH_STATE.SIGN_IN:
                return <SignInScreen />;

            default:
                return <WelcomeScreen />;
        }
    }

    return (
        <VideoBackground>
            <StatusBar style='light' />
            {renderContent()}
        </VideoBackground>
    );

}


