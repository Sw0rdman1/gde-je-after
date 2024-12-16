import { AVAILABLE_LANGUAGES, Language } from "@/constants/languages";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useState } from "react";
import { fontSizes } from "@/constants/font";

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
                    <Image
                        source={selectedLanguage.flag}
                        style={styles.image}
                    />

                </TouchableOpacity>

                {dropdownVisible && (
                    <View style={styles.dropdownMenu}>
                        {AVAILABLE_LANGUAGES.map((language) => (
                            <TouchableOpacity
                                key={language.langCode}
                                style={styles.dropdownItem}
                                onPress={() => handleLanguageSelect(language)}
                            >
                                <Text style={styles.languageTextMenu}>
                                    {language.name}
                                </Text>
                                <Image
                                    source={language.flag}
                                    style={styles.imageMenu}
                                />

                            </TouchableOpacity>
                        ))}
                    </View>
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
        borderRadius: 8,

    },
    dropdownContainer: {
        width: 100,
        borderRadius: 8,
        backgroundColor: "transparent",
    },
    dropdownButton: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 8,
        borderRadius: 8,
        padding: 6,
    },
    languageText: {
        fontSize: fontSizes.medium,
        color: "#FFFFFF",
        fontWeight: "bold",
    },
    image: {
        height: 28,
        width: 36,
    },
    languageTextMenu: {
        fontSize: fontSizes.medium,
        color: "#000",
    },
    imageMenu: {
        height: 24,
        width: 32,
    },
    dropdownMenu: {
        position: "absolute",
        top: 50,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 1000, // Ensure it overlaps other elements
    },
    dropdownItem: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        padding: 6,
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
});

export default LanguagePicker;
