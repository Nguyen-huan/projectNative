import { StyleSheet, Text, View, SafeAreaView, Image, StatusBar, Platform } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/Online-shop-logo-template-on-transparent-background-PNG.png')}
        resizeMode="contain"
        style={{ height: 50 }}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 20,
    marginTop: 200
  }
})