import { StyleSheet } from 'react-native';

import ChangeLanguage from '@/components/ChangeLanguage';
import { useTranslations } from '@/hooks/useTranslations';
import { Text, View } from '@/components/ui/Themed';
import Button from '@/components/ui/Button';
import { useSession } from '@/context/SessionProvider';

export default function TabOneScreen() {
  const dictionary = useTranslations();
  const { signOut } = useSession();

  return (
    <View style={styles.container}>
      <ChangeLanguage />
      <Text style={styles.title}>
        {dictionary('helloWorld')}
      </Text>
      <Button
        title={dictionary('auth.logout')}
        onPress={signOut}
      />
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
