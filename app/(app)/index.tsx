import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import ChangeLanguage from '@/components/ChangeLanguage';
import { useTranslations } from '@/hooks/useTranslations';

export default function TabOneScreen() {
  const dictionary = useTranslations();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {dictionary('helloWorld')}
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
