import { useColors } from '@/hooks/useColors';
import { useEffect, useState } from 'react';
import { StyleSheet, TextInput as DefaultTextInput } from 'react-native'
import { Text, View } from './Themed';
import { MaterialIcons } from '@expo/vector-icons';

export type TextInputProps = DefaultTextInput['props'];

interface InputFieldProps extends TextInputProps {
    label: string;
    validate?: boolean;
    errors: string | undefined;
}

const InputField: React.FC<InputFieldProps> = (props) => {
    const { label, errors, validate, value, onBlur, ...otherProps } = props;
    const { tint, textPrimary, textHint, error, success, background } = useColors()
    const [isFocused, setIsFocused] = useState(false);
    const [inputStatus, setInputStatus] = useState<'default' | 'error' | 'success'>('default');


    useEffect(() => {
        if (!validate) {
            setInputStatus('default')
            return
        }

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

    const statusColor = (isBorder: boolean) => {
        if (isFocused) {
            return tint
        }

        switch (inputStatus) {
            case 'error':
                return error
            case 'success':
                return success
            default:
                return textHint
        }
    }

    const statusIcon = () => {
        if (isFocused) {
            return null
        }

        switch (inputStatus) {
            case 'error':
                return <MaterialIcons name="error-outline" size={28} color={error} />
            case 'success':
                return <MaterialIcons name="check" size={28} color={success} />
            default:
                return null
        }
    }

    return (
        <View style={styles.inputWithError}>
            <View style={[styles.container, {
                borderColor: statusColor(true),
                shadowColor: statusColor(false),
            }]}>
                <Text style={[styles.label, { color: statusColor(true), backgroundColor: background }]}>
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
                <View style={styles.icon}>
                    {statusIcon()}
                </View>
            </View>
            <View style={styles.errorContainer}>
                <Text style={[styles.errorText, { color: error }]}>
                    {!isFocused && errors}
                </Text>
            </View>
        </View>
    )
}

export default InputField

const styles = StyleSheet.create({
    inputWithError: {
        marginBottom: 16,
        gap: 8,
    },
    container: {
        borderWidth: 1,
        borderRadius: 32,
        padding: 8,
        position: 'relative',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4

    },
    label: {
        position: 'absolute',
        top: -10,
        left: 16,
        paddingHorizontal: 4,
        fontSize: 16,
        fontWeight: '500',
    },
    input: {
        padding: 8,
        fontSize: 18,
        fontWeight: '600',
    },
    icon: {
        position: 'absolute',
        right: 14,
        top: 14,
        paddingLeft: 8,
    },
    errorContainer: {
        height: 14,
        paddingLeft: 12,
    },
    errorText: {
        fontSize: 12,
        fontWeight: '600',
    }
})