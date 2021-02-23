import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, Pressable, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native'
import { useUser } from '../providers/UserContextProvider'
import { CardItem } from '../components/CardItem'
import {PressableButton} from '../components/PressableButton'

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
           
                
            <Text style={{textAlignVertical: 'top', fontSize: 16, paddingTop: 10}}>{textValue.length}/240 characters</Text>
            <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                <PressableButton 
                buttonText={'Submit'}
                actionOnPress={()=>{
                    console.log('You pressed the submit button on the edit profile screen.')
                }}
                />
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
        width: '95%',
        marginTop: 40,
        borderColor: 'grey',
        borderWidth: 2,
        borderRadius: 5,
        fontSize: 16,
    }
})