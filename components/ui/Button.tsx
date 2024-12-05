import { useColors } from '@/hooks/useColors';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
    title: string;
    onPress: () => void;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, loading }) => {
    const { tint } = useColors();

    return (
        <TouchableOpacity onPress={onPress} disabled={loading}>
            <View style={[{ backgroundColor: tint }, styles.button, loading && styles.disabled]}>
                <Text style={styles.text}>{title}</Text>
            </View>

            {loading && <ActivityIndicator size="small" color="white" />}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    button: {
        minWidth: 140,
        paddingHorizontal: 20,
        height: 40,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    disabled: {
        backgroundColor: 'gray',
    },
})