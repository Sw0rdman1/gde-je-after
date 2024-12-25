import { createContext, useContext, useState } from "react";
import { AUTH_STATE } from "@/constants/Auth";

interface AuthContextType {
    email: string;
    setEmail: (email: string) => void;
    authState: AUTH_STATE;
    setAuthState: (status: AUTH_STATE) => void;
    handleBack: () => void;
}

const SessionContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [email, setEmail] = useState('');
    const [authState, setAuthState] = useState<AUTH_STATE>(AUTH_STATE.WELCOME);

    const handleBack = () => {
        setAuthState(AUTH_STATE.WELCOME);
    }



    const SessionContextValue: AuthContextType = {
        email, setEmail, authState, setAuthState, handleBack
    };

    return (
        <SessionContext.Provider value={SessionContextValue}>
            {children}
        </SessionContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};