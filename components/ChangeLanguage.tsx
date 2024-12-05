import { useEffect } from "react";
import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTranslation } from "react-i18next";

import { Text, View } from './Themed'
import { AVAILABLE_LANGUAGES } from "@/constants/languages";

const ChangeLanguage = () => {
    const { i18n, t } = useTranslation();
    const currentLanguage = i18n.language;

    useEffect(() => {
        const loadLanguage = async () => {
            const savedLanguage = await AsyncStorage.getItem("language");
            if (savedLanguage) {
                i18n.changeLanguage(savedLanguage);
            }
        };
        loadLanguage();
    }, [i18n]);

    const changeLanguage = async (lang: string) => {
        await AsyncStorage.setItem("language", lang);
        i18n.changeLanguage(lang);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{t('language')}</Text>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flagsContainer}
            >
                {AVAILABLE_LANGUAGES.map(({ langCode, flag, name }) => (
                    <TouchableOpacity
                        key={name}
                        onPress={() => changeLanguage(langCode)}
                        style={[
                            styles.flag,
                            currentLanguage === langCode && styles.activeFlag,
                            currentLanguage !== langCode && styles.inactiveFlag,
                        ]}
                    >
                        <Text style={styles.flagText}>
                            {flag}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

export default ChangeLanguage

const styles = StyleSheet.create({
    container: {
        height: 100,
        marginVertical: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    flagsContainer: {
        flexDirection: "row",
        paddingVertical: 5,
    },
    flag: {
        paddingHorizontal: 10,
    },
    flagText: {
        fontSize: 32,
    },
    activeFlag: {
        transform: [{ scale: 1.2 }],
    },
    inactiveFlag: {
        opacity: 0.5,
    },
    text: {
        fontSize: 22,
        lineHeight: 32,
        marginTop: -6,
    },
});