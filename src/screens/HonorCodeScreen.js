import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'


export const HonorCodeScreen = ({name, navigation})=>{
    return (
        <View>
            <Text>
                Welcome {name}
            </Text>
            <Text>
                Another text block explaining the honor code and student handbook
            </Text>

            <Text>
                Do you accept?
            </Text>
            <View>
            <Button
            title="Yes"
            />
            <Button
            onPress={()=>navigation.goBack()}
            title="No"
            />
            </View>
            
        </View>
    )
}