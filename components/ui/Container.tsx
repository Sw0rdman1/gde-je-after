import { FlexAlignType, StyleProp, StyleSheet, View, ViewStyle } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface ContainerProps {
    styles?: StyleProp<ViewStyle>;
    alignItems?: FlexAlignType;
    justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ styles, alignItems, justifyContent, children }) => {
    const { top } = useSafeAreaInsets();
    return (
        <View style={[styles, { paddingTop: top, flex: 1, alignItems, justifyContent }]}>
            {children}
        </View>
    )
}

export default Container