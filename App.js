import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import FilterScreen from './screens/FilterScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hi welcome to the shopping App</Text>
      <CategoriesScreen/>
      <CategoryMealsScreen/>
      <MealDetailScreen/>
      <FavouritesScreen/>
      <FilterScreen/>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
