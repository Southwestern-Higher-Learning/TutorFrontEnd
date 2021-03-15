import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, Keyboard, FlatList, Dimensions } from 'react-native';
import { Searchbar } from 'react-native-paper'
import {NameOrSubject} from '../components/NameOrSubject'
import {SearchTutor} from '../providers/SearchTutor'
import {LoadingItem} from '../components/LoadingItem'
import {TutorItem} from '../components/TutorItem'


export const SearchScreen = ({navigation}) => {
        const [searchQuery, setSearchQuery] = useState('')
        const onChangeSearch = query => setSearchQuery(query)
        const [isKeyboard, setIsKeyboard] = useState(false)
        const [isName, setIsName] = useState(false) // set to subject automatically, user can select to search for tutor by name
        const [searchState, setSearchState] = useState({
            isLoading: false,
            tutors: []
        })
        
        const getTutors = async (searchParams) =>{
            setSearchState({isLoading: true, tutors:[]})
            try {
                const data = await SearchTutor(searchParams)
                if(data){
                    console.log(data.first_name)
                    setSearchState({
                        isLoading: false,
                        tutors: data
                    })
                }
            } catch(error){
                console.log(error)
                setSearchState({
                    isLoading: false,
                    tutors: []
                })
            }
        }
        
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
                        autoCorrect={false}
                        placeholder={isName ? "Search for tutor name" : "Search for tutor for subject"}
                        onChangeText={onChangeSearch}
                        value={searchQuery}
                        onSubmitEditing={()=>{
                            Keyboard.dismiss
                            getTutors({
                                param: searchQuery.toLowerCase(),
                                isName
                            })
                            
                            // need to search through state and update UI
                        }}
                    />

                    {isKeyboard ? <NameOrSubject selectionCallBack={setIsName}/> : null}
                    {searchState.tutors ? 
                    
                    <FlatList 
                    contentContainerStyle={{paddingBottom: 300}}
                    initialNumToRender={searchState.tutors.length+1}
                    data={searchState.tutors}
                    keyExtractor={result => result.profile_url}
                    renderItem={( { item } )=>{
                        return (
                            <View>
                                <TutorItem 
                                navigation={navigation}
                                tutor={item}
                                />
                            </View>

                        )
                    }}

                    /> : null}
                </View>
            </View>
        )
        
    return searchState.isLoading ? <LoadingItem screen="Search"/> : loadedScreen
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