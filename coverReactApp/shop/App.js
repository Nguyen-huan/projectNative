import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider } from 'native-base'

import Products from './screens/Products/ProductContainer'
import Header from './shared/Header'
export default function App() {
  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <Header />
        <Products />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
