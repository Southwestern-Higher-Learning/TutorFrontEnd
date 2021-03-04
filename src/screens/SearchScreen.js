import React, {useEffect} from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Keyboard } from 'react-native';
import { Searchbar } from 'react-native-paper'
import {NameOrSubject} from '../components/NameOrSubject'


export const SearchScreen = () => {
        const [searchQuery, setSearchQuery] = React.useState('')
        const onChangeSearch = query => setSearchQuery(query)
        const [isKeyboard, setIsKeyboard] = React.useState(false)
        const [isName, setIsName] = React.useState(false) // set to subject automatically, user can select to search for tutor by name
        const [isLoading, setIsLoading] = React.useState(false)
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

        let loadedScreen = (
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Search</Text>
                </View>
                <View>
                    <Searchbar 
                        placeholder={isName ? "Search for tutor name" : "Search for tutor for subject"}
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        onSubmitEditing={()=>{
                            Keyboard.dismiss
                            setIsLoading(true)
                            setTimeout(()=>{setIsLoading(false)}, 2000)
                            // need to make api call for user search
                            
                        }}
                    />
                    {isKeyboard ? <NameOrSubject selectionCallBack={setIsName}/> : null}
                </View>
            </View>
        )
        let loadingScreen = (
            <View>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>Search</Text>
                </View>
                <View style={{paddingTop: 100}}>   
                    <ActivityIndicator size="large" color="black" />
                </View>
            </View>
        )
    return isLoading ? loadingScreen : loadedScreen
}

const styles = StyleSheet.create({
    headerContainer: {
        height: 70,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#ffcd20',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '400',
        fontFamily: 'PlayfairDisplay',
    }
    
})