import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput, ScrollView } from 'react-native'
import { useUser } from '../providers/UserContextProvider'
import { CardItem } from '../components/CardItem'
import {PressableButton} from '../components/PressableButton'
import { UpdateDescription } from '../providers/UpdateAboutMe'
import { LoadingItem } from '../components/LoadingItem';

export const EditProfileScreen = ({navigation})=>{
    const {state} = useUser()
    const {dispatch} = useUser()
    const [textValue, onChangeText] = useState(state.user.description ? state.user.description : 'Update your about me here')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <ScrollView contentContainerStyle={styles.container}
        keyboardShouldPersistTaps='handled'
        >
            <CardItem 
            // update this language asap
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
                {isLoading ? <LoadingItem/> : (
                     <View style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
                     <PressableButton 
                            buttonText={'Submit'}
                            actionOnPress={async()=>{
                                // make http req (patch) to update about me
                                const response = await UpdateDescription(textValue, state.access_token)
                                console.log(response)
                                if(response){
                                    try{
                                        setIsLoading(true)
                                        dispatch({message: "SET_USER", payload: response})
                                        navigation.navigate('profile')
                                    } catch (error) {
                                        // add better error handling
                                        setIsLoading(false)
                                        console.log(error)
                                    }
                                }
                            }}
                        />
                      </View>
                )}
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