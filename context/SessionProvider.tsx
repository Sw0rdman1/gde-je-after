import { createContext, useContext, useEffect, useState } from "react";
import { Session, User } from "@supabase/supabase-js";
import supabase from "@/config/supabase";


interface SessionContextType {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    signUpWithEmail: (email: string, password: string, displayName: string) => Promise<string | null>;
    signInWithEmail: (email: string, password: string) => Promise<string | null>;
    signOut: () => Promise<void>;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

interface SessionProviderProps {
    children: React.ReactNode;
}

export const SessionProvider: React.FC<SessionProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const signInWithEmail = async (email: string, password: string) => {
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        return error?.code ?? null;
    }

    const signUpWithEmail = async (email: string, password: string, displayName: string) => {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: { data: { display_name: displayName } },
        });


        return error?.code ?? null;
    }

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    const SessionContextValue: SessionContextType = {
        user, session, isLoading, signInWithEmail, signOut, signUpWithEmail
    };

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setUser(session?.user ?? null)
            setIsLoading(false)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setUser(session?.user ?? null)
            setIsLoading(false)
        })
    }, [])

    return (
        <SessionContext.Provider value={SessionContextValue}>
            {children}
        </SessionContext.Provider>
    );
};

export const useSession = () => {
    const context = useContext(SessionContext);
    if (context === undefined) {
        throw new Error("useSession must be used within an SessionProvider");
    }
    return context;
};