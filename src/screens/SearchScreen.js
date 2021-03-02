import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper'


export const SearchScreen = () => {
        const [searchQuery, setSearchQuery] = React.useState('')
        const onChangeSearch = query => setSearchQuery(query)

    return (    
        <View>
            <Searchbar 
                placeholder="Search by Subject or Tutor"
                onChangeText={onChangeSearch}
                value={searchQuery}
            />
        </View>
    )
}

const styles = StyleSheet.create({
 
})