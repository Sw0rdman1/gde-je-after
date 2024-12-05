import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { useTranslation } from "react-i18next";
import ChangeLanguage from '@/components/ChangeLanguage';

export default function TabOneScreen() {
  const { t } = useTranslation();
  const text = t('helloWorld');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {text}
      </Text>
      <ChangeLanguage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
