import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CategoryMealsScreen = ({ navigation }) => {
    return (
        <View style={styles.screen}>
            <Text> This is the Category Meals Screen </Text>
            <Button
                title="Display Meal Detail"
                onPress={() => navigation.navigate('MealDetailScreen')}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CategoryMealsScreen