import { AVAILABLE_LANGUAGES, Language } from "@/constants/languages";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { fontSizes } from "@/constants/font";
import { BlurView } from "expo-blur";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";


const LanguagePicker: React.FC = () => {
    const { i18n } = useTranslation();
    const currentLanguage = i18n.language;
    const selectedLanguage = AVAILABLE_LANGUAGES.find((lang) => lang.langCode === currentLanguage) || AVAILABLE_LANGUAGES[0];
    const [dropdownVisible, setDropdownVisible] = useState(false);


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

    const handleLanguageSelect = (language: Language) => {
        changeLanguage(language.langCode);
        setDropdownVisible(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.dropdownContainer}>
                <TouchableOpacity
                    style={styles.dropdownButton}
                    onPress={() => setDropdownVisible(!dropdownVisible)}
                >
                    <Text style={styles.selectedFlag}>{selectedLanguage.flag}</Text>

                </TouchableOpacity>

                {dropdownVisible && (
                    <BlurView intensity={50} tint="light" style={styles.dropdownMenu} experimentalBlurMethod="dimezisBlurView">
                        {AVAILABLE_LANGUAGES.map((language) => (
                            <TouchableOpacity
                                key={language.langCode}
                                style={styles.dropdownItem}
                                onPress={() => handleLanguageSelect(language)}
                            >
                                <Text style={styles.flag}>
                                    {language.flag}
                                </Text>
                                <Text style={styles.languageText}>
                                    {language.name}
                                </Text>

                            </TouchableOpacity>
                        ))}
                    </BlurView>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        zIndex: 2,
    },
    selectedFlag: {
        fontSize: fontSizes.xxxLarge,
    },
    dropdownContainer: {
        width: 100,
        backgroundColor: "transparent",
    },
    dropdownButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8,
        borderRadius: 8,
    },
    languageText: {
        fontSize: fontSizes.medium,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    dropdownMenu: {
        position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        borderRadius: 8,
        shadowColor: "#ffffff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1000, // Ensure it overlaps other elements
    },
    dropdownItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        padding: 4,
        borderBottomWidth: 1,
        borderBottomColor: "#000",
        borderRadius: 8,
    },
    flag: {
        fontSize: fontSizes.xxLarge,
    },
});

export default LanguagePicker;
