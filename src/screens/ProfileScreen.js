import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useUser } from '../providers/UserContextProvider'

export const ProfileScreen = () => {

    const { state } = useUser()
    
    return (
        
        <View>
            <Text>
                {state.user.first_name}
            </Text>
        </View>
        
    )
}

const styles = StyleSheet.create({

})