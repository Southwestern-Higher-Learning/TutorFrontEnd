import React from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'
import { TutorReviews } from '../components/TutorReviews.js'
import { CardItem } from '../components/CardItem.js'
import { PressableButton } from '../components/PressableButton.js'
import { NoReviews } from '../components/NoReviews.js'
import {Sessions} from '../providers/Sessions'
import {Ionicons} from '@expo/vector-icons'
import {SessionEvents} from '../components/SessionEvents'


export const ScheduleWithTutorScreen = ({route, navigation})=>{
    const {tutorState} = route.params
    const [modalState, setModalState] = React.useState(false)
    const [sessions, setSessions] = React.useState([])
    
    React.useEffect(()=>{

        Sessions(tutorState.id).then(data => setSessions(data)).catch(err => console.log(err))

    }, [])
    
    return (
        <View style={styles.screenContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>
                    Schedule your appointment with {tutorState.first_name}!
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Image
                    source={{uri: tutorState.profile_url}}
                    style={styles.tutorImage}
                />
                <PressableButton
                // need to generate their Google Calendar information when this button is pressed
                    buttonText='Schedule'
                    actionOnPress={()=>{
                        setModalState(true)
                        
                    }}
                />
            </View>
            <View style={styles.cardContainer}>
                <CardItem 
                textContent= {tutorState.description}
                cardName= {`About ${tutorState.first_name}`}
                />
            </View>
            {tutorState.reviews.length !== 0 ? (<View style={styles.reviewsContainer}> 
                <TutorReviews reviewList={tutorState.reviews} />
            </View>) : (<View style={styles.reviewsContainer}>
                <NoReviews NoReviewsText="This guide does not currently have reviews, be the first to review after your session." />
            </View>)}
            <Modal
            transparent={true}
            visible={modalState}
            >
                <View style={styles.modalContainer}>
                <TouchableOpacity
                onPress={()=>{setModalState(false)}}
                >
                    <Ionicons name='close-outline' size={35} color={'white'}/>
                </TouchableOpacity>
                    {sessions.length == 0 ? (<Text>This guide does not have any upcoming sessions, check back in a week </Text>) : (<SessionEvents eventsList={sessions} tutor_id={tutorState.id} />)}
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:  '#FBFBF8'

    },
    textContainer: {
        flex: 1, 
        alignItems: 'center',
        justifyContent: 'center', 
    }, 
    welcomeText: {
        fontSize: 18,
        fontFamily: 'HKGroteskRegular',
        justifyContent: 'flex-start',
        textAlign: 'right',
        width: '80%', 
    }, 
    tutorImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: 'contain',
        borderWidth: 2,
        justifyContent: 'flex-start',
        borderColor: '#ffcd20'
    }, 
    cardContainer: {
        flex: 3,
        padding: 10
    },
    reviewsContainer: {
        flex: 3,
        marginTop: 20,
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    modalContainer:{
        flex: 1, 
        backgroundColor: 'rgba(0, 0, 0, 0.9)', 
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
})