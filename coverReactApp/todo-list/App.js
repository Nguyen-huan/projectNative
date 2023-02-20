import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Products from './screens/Products/ProductContainer'
import Header from './shared/Header'
export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Products />
    </View>
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
