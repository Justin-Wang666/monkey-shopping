import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { CATEGORIES } from '../data/dummy-Data';

const CategoriesScreen = ({ navigation }) => {

    const renderCategory = (data) => {
        return (
            <View style={styles.gridItems}>
                <Text>{data.index +1} - {data.item.title} </Text>
            </View>
        )
    };
    return <FlatList data={CATEGORIES} numColumns={3} renderItem={renderCategory} />;
};


const styles = StyleSheet.create({
    screen: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItems: {
        flex: 1, 
        height: 150,

    }
})

export default CategoriesScreen;
