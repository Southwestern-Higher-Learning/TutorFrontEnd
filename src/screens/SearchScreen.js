import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Pressable, Keyboard } from 'react-native';
import { Searchbar } from 'react-native-paper'
import {NameOrSubject} from '../components/NameOrSubject'


export const SearchScreen = () => {
        const [searchQuery, setSearchQuery] = React.useState('')
        const onChangeSearch = query => setSearchQuery(query)
        const [isKeyboard, setIsKeyboard] = React.useState(false)
        const [isName, setIsName] = React.useState(false) // set to subject automatically, user can select to search for tutor by name
        console.log(isName)
        useEffect(()=>{
            Keyboard.addListener('keyboardDidShow', _keyboardDidShow);
            Keyboard.addListener('keyboardDidHide', _keyboardDidHide);

            return ()=>{
                Keyboard.removeAllListeners('keyboardDidShow')
                Keyboard.removeAllListeners('keyboardDidHide')
            }
        }, [])

        const _keyboardDidHide = ()=>{
            setIsKeyboard(false)
        }
        const _keyboardDidShow = ()=>{
            setIsKeyboard(true)
        }
    return (    
        <View style={{paddingTop: 40}}>
            
            <Searchbar 
                placeholder={isName ? "Search Name" : "Search Subject"}
                onChangeText={onChangeSearch}
                value={searchQuery}
                onSubmitEditing={Keyboard.dismiss}
            />
             
            {isKeyboard ? <NameOrSubject style={{paddingTop: 10}} selectionCallBack={setIsName}/> : null}
        </View>
    )
}

const styles = StyleSheet.create({
    
})