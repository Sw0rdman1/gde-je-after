// ToastContext.tsx
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native';

type ToastSeverity = 'success' | 'error' | 'info' | 'warning';

type ToastContextType = {
    showToast: (message: string, severity: ToastSeverity, duration?: number) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

type ToastProviderProps = {
    children: ReactNode;
};

type ToastState = {
    message: string;
    severity: ToastSeverity;
} | null;

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
    const [toast, setToast] = useState<ToastState>(null);
    const [animation] = useState(new Animated.Value(0));

    const showToast = useCallback((message: string, severity: ToastSeverity, duration: number = 3000) => {
        setToast({ message, severity });

        // Animate toast appearance
        Animated.timing(animation, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
        }).start();

        // Hide toast after the specified duration
        setTimeout(() => {
            Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start(() => setToast(null));
        }, duration);
    }, [animation]);

    const toastStyle = {
        opacity: animation,
        transform: [
            {
                translateY: animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [50, 0],
                }),
            },
        ],
    };

    const getToastBackgroundColor = (severity: ToastSeverity): string => {
        switch (severity) {
            case 'success':
                return '#4CAF50';
            case 'error':
                return '#F44336';
            case 'info':
                return '#2196F3';
            case 'warning':
                return '#FFC107';
            default:
                return '#333';
        }
    };

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {toast && (
                <TouchableWithoutFeedback onPress={() => setToast(null)}>
                    <View style={StyleSheet.absoluteFill} pointerEvents="box-none">
                        <Animated.View
                            style={[
                                styles.toastContainer,
                                toastStyle,
                                { backgroundColor: getToastBackgroundColor(toast.severity) },
                            ]}
                        >
                            <Text style={styles.toastText}>{toast.message}</Text>
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>
            )}
        </ToastContext.Provider>
    );
};

export const useToast = (): ToastContextType => {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
};

const styles = StyleSheet.create({
    toastContainer: {
        position: 'absolute',
        bottom: 50,
        left: '10%',
        right: '10%',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    toastText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
