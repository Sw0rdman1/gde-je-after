import { useColors } from '@/hooks/useColors';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
    backgroundColor?: string;
    color?: string;
    title: string;
    onPress: () => void;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ backgroundColor, color, title, onPress, loading }) => {
    const { tint } = useColors();
    backgroundColor = backgroundColor || tint;
    color = color || 'white';

    return (
        <TouchableOpacity onPress={onPress} disabled={loading}>
            <View style={[{ backgroundColor }, styles.button, loading && styles.disabled]}>
                <Text style={[{ color }, styles.text]}>{title}</Text>
            </View>
            {loading && <ActivityIndicator size="small" color="white" />}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        minWidth: 240,
        paddingHorizontal: 20,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
    },
    disabled: {
        backgroundColor: 'gray',
    },
})