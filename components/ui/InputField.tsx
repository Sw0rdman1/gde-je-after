import { useColors } from '@/hooks/useColors';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput as DefaultTextInput } from 'react-native'
import { Text, View } from './Themed';

export type TextInputProps = DefaultTextInput['props'];

interface InputFieldProps extends TextInputProps {
    label: string;
    errors?: string;

}

const InputField: React.FC<InputFieldProps> = (props) => {
    const { label, errors, value, onBlur, ...otherProps } = props;
    const { tint, textPrimary, textHint, textSecondary } = useColors()
    const [isFocused, setIsFocused] = useState(false);
    const [inputStatus, setInputStatus] = useState<'default' | 'error' | 'success'>('default');


    useEffect(() => {
        if (!value) {
            setInputStatus('default')
        } else if (errors) {
            setInputStatus('error')
        } else {
            setInputStatus('success')
        }
    }, [value, errors])


    const handleBlur = (e: any) => {
        setIsFocused(false)
        onBlur && onBlur(e)
    }

    const statusColor = () => {
        switch (inputStatus) {
            case 'error':
                return 'red'
            case 'success':
                return 'green'
            default:
                return textHint
        }
    }

    return (
        <View style={[styles.container, { borderColor: statusColor(), shadowColor: statusColor() }]}>
            <Text style={[styles.label, { color: isFocused ? tint : textSecondary }]}>
                {label}
            </Text>
            <DefaultTextInput
                style={[styles.input, { color: textPrimary, }]}
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                placeholderTextColor={textHint}
                {...otherProps}
            />
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
        borderWidth: 1,
        borderRadius: 32,
        padding: 8,
        width: '90%',
        position: 'relative',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4

    },
    label: {
        position: 'absolute',
        top: -10,
        left: 16,
        backgroundColor: '#fff',
        paddingHorizontal: 4,
        fontSize: 16,
        fontWeight: '500',
    },
    input: {
        padding: 8,
        fontSize: 18,
        fontWeight: '600',
    },
})