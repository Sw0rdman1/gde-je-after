// ToastContext.tsx
import React, { createContext, useContext, useRef, useState, useCallback, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { BlurView } from 'expo-blur';
import { Ionicons } from '@expo/vector-icons';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

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
    const animation = useSharedValue(0);

    const showToast = useCallback((message: string, severity: ToastSeverity, duration: number = 3000) => {
        setToast({ message, severity });

        // Animate toast appearance
        animation.value = withTiming(1, { duration: 300 });

        // Hide toast after the specified duration
        setTimeout(() => {
            animation.value = withTiming(0, { duration: 300 }, () => setToast(null));
        }, duration);
    }, [animation]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: animation.value,
        transform: [
            {
                translateY: animation.value * -50,
            },
        ],
    }));

    const progressStyle = useAnimatedStyle(() => ({
        width: `${animation.value * 100}%`,
    }));

    const getIcon = (severity: ToastSeverity): ReactNode => {
        switch (severity) {
            case 'success':
                return <Ionicons name="checkmark-circle" size={24} color="#4CAF50" style={styles.icon} />;
            case 'error':
                return <Ionicons name="close-circle" size={24} color="#F44336" style={styles.icon} />;
            case 'info':
                return <Ionicons name="information-circle" size={24} color="#2196F3" style={styles.icon} />;
            case 'warning':
                return <Ionicons name="alert-circle" size={24} color="#FFC107" style={styles.icon} />;
            default:
                return <Ionicons name="alert" size={24} color="#333" style={styles.icon} />;
        }
    };

    const getIconColor = (severity: ToastSeverity): string => {
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
                        <Animated.View style={[styles.toastContainer, animatedStyle]}>
                            <BlurView intensity={50} style={styles.blurView}>
                                <View style={styles.progressContainer}>
                                    <Animated.View style={[styles.progressBar, progressStyle]} />
                                </View>
                                <View style={styles.iconTextContainer}>
                                    {getIcon(toast.severity)}
                                    <Text style={styles.toastText}>{toast.message}</Text>
                                </View>
                            </BlurView>
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
        borderRadius: 8,
        overflow: 'hidden',
    },
    blurView: {
        padding: 15,
        borderRadius: 8,
    },
    progressContainer: {
        height: 4,
        width: '100%',
        backgroundColor: '#333',
        overflow: 'hidden',
    },
    progressBar: {
        height: '100%',
        backgroundColor: '#4CAF50',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    icon: {
        marginRight: 10,
    },
    toastText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
});
