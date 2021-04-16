import React, {useState} from 'react';
import {View, StyleSheet, Text, Image, Modal, TouchableOpacity} from 'react-native'
import {PressableButton} from './PressableButton'
import { Ionicons } from '@expo/vector-icons'

export const TutorItem = ({navigation, tutor})=>{
    // not sure I really need to use useState here
    const [tutorState, setTutor] = useState(tutor)
    const [modalState, setModalState] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.userImage}>
                        <Image
                            source={{uri: tutorState.profile_url}}
                            style={styles.image}
                        />
                </View>
                <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.cardNameText}>{tutorState.first_name} {tutorState.last_name} </Text>
                </View>
            </View>
             <Text style={styles.textContentText}>{tutor.description}</Text>
             <View style={{paddingBottom: 10, flexDirection: 'row', width: '100%', alignItems: 'center', justifyContent: 'space-around' }}>
                <PressableButton 
                buttonText="Schedule"
                actionOnPress={()=>{
                    navigation.navigate('Schedule', {tutorState})
                }}
                /> 
                <PressableButton 
                buttonText="Report"
                actionOnPress={()=>{
                    setModalState(true)
                }}
                />
                <Modal transparent={true} visible={modalState}>
                    <View style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.8)'}}>
                        <View style={styles.modalContainer}>
                            <View style={styles.modalHeaderContainer}> 
                                <Text style={{fontSize: 25, fontWeight: '400', fontFamily: 'PlayfairDisplay'}}> Report </Text>
                                <TouchableOpacity
                                    style={{alignItems: 'flex-end', justifyContent: 'flex-end', marginLeft: 70, marginRight: 10}}
                                    onPress={() =>{
                                        setModalState(false)
                                    }}
                                >
                                    <Ionicons name='close-outline' size={35} color={'white'}/>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                                <Text style={{fontSize: 17}}>Please choose one of the options below: </Text>
                            </View>
                            <View style={{flex: 6, justifyContent: 'space-around', alignItems: 'center'}}>
                                <TouchableOpacity 
                                    style={styles.buttonStyle}
                                    onPress={()=>{
                                        setModalState(false)
                                        ReportTutor('Inappropriate Profile Picture', tutorState)
                                    }}
                                >
                                    <Text style={{fontSize: 17}}> Inappropriate Profile Picture</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={()=>{
                                        setModalState(false)
                                        ReportTutor('Inappropriate About Me Section', tutorState)
                                    }}
                                >
                                    <Text style={{fontSize: 17}}> Inappropriate About Me Section</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonStyle}
                                    onPress={()=>{
                                        setModalState(false)
                                        ReportTutor('Incorrect Profile Information', tutorState)
                                    }}
                                >
                                    <Text style={{fontSize: 17}}> Incorrect Profile Information </Text>
                                </TouchableOpacity>
                                
                            </View>
                        </View>
                    </View>
                </Modal>
             </View>
        
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 10,
        borderWidth: 2,
        width: 350,
        height: 300,
        margin: 10
    },
    cardNameContainer: {
        position: 'relative',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#828282'
    },
    cardNameText: {
        fontFamily: 'HKGroteskRegular',
        color: 'white',
        fontSize: 18,
        fontWeight: '300',
        textAlign: 'center',
        margin: 10,
        flexDirection: 'row',
        
    },
    textContentContainer: {
        justifyContent: 'center',
        alignItems: 'center'

    },
    textContentText: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'HKGroteskRegular',
        fontSize: 14,
        color: 'white',
        paddingTop: 10
    },
    userImage:{
        flex: 1,
        justifyContent: 'center',
        paddingTop: 10
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: 'contain',
        borderWidth: 2,
        borderColor: '#ffcd20',
        marginLeft: 20,
    },
    modalContainer:{
        flex: 1, 
        backgroundColor: 'white', 
        marginVertical: 250, 
        marginHorizontal: 40,
        borderRadius: 30
    },
    modalHeaderContainer:{
        height: 40,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#ffcd20',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        flexDirection: 'row'
    },
    buttonStyle:{
        height: 50,
        width: '80%', 
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffcd20',
        borderRadius: 10,
    }
})