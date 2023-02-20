import { StyleSheet, View, ActivityIndicator, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Container, Item, Input, Icon, Text, Box, Heading } from 'native-base'

import ProductList from './ProductList'

const data = require('../../assets/data/products.json')
export default function ProductContainer() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(data)
    return () => {
      setProducts([])
    }
  }, [])
  return (
    <View>
      <Text>ProductContainer</Text>
      <View style={{ marginTop: 20 }}>
        <FlatList
          numColumns={2}
          data={products}
          renderItem={({ item }) => <ProductList
            key={item.id}
            item={item}
          />}
          keyExtractor={item => item.name}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})