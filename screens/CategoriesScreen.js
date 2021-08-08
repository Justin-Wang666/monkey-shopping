import React from 'react'
import {View, Text, StyleSheet} from 'react-native';

const CategoriesScreen = () => {
    return (
            <View style={styles.categoriesScreen}>
            <Text> This is the CategoriesScreen </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e011ee'
    }
})

export default CategoriesScreen;