import { AVAILABLE_LANGUAGES, Language } from "@/constants/languages";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { fontSizes } from "@/constants/font";
import { BlurView } from "expo-blur";


const LanguagePicker: React.FC = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<Language>(AVAILABLE_LANGUAGES[0]);
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const handleLanguageSelect = (language: Language) => {
        setSelectedLanguage(language);
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
                    <BlurView intensity={50} tint="light" style={styles.dropdownMenu}>
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
