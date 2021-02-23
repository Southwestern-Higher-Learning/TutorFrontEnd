import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { useUser } from '../providers/UserContextProvider'
import { CardItem } from '../components/CardItem'

export const EditProfileScreen = ({navigation})=>{
    const {state} = useUser()
    const [textValue, onChangeText] = useState(state.user.description ? state.user.description : 'Update your about me here')

    return (
        <ScrollView contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
        >
            <CardItem 
            textContent={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nec mi quis scelerisque. In consequat libero feugiat dolor varius, ut mollis ante mollis. Morbi malesuada tincidunt risus id aliquet. Aenean condimentum, nunc a dignissim imperdiet, lacus orci ornare risus, at elementum tellus purus et quam. Sed rhoncus, elit pulvinar convallis blandit, velit dolor fermentum tortor, vitae placerat sem neque et eros."}
            cardName={"Getting Started"}
            />

                <TextInput 
                    value={textValue}
                    onChangeText={text => onChangeText(text)}
                    style={styles.textBox}
                    maxLength={240}
                    multiline={true}
                />
           
                
            <Text style={{textAlignVertical: 'top', fontSize: 16}}>{textValue.length}/240 characters</Text>
            <View>
                <Pressable />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textBox: {
        width: '80%',
        marginTop: 40,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        textAlignVertical: 'top',
        fontSize: 16
    }
})