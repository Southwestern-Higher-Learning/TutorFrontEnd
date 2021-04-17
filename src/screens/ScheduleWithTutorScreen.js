import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native'
import { TutorReviews } from '../components/TutorReviews.js'
import { CardItem } from '../components/CardItem.js'
import { NoReviews } from '../components/NoReviews.js'
import {Sessions} from '../providers/Sessions'
import {LoadingItem} from '../components/LoadingItem'
import {SessionEvents} from '../components/SessionEvents'


export const ScheduleWithTutorScreen = ({route, navigation})=>{
    const {tutorState} = route.params
    const [sessions, setSessions] = React.useState({events: [], loaded: false})
    
    React.useEffect(()=>{

        Sessions(tutorState.id).then(data => setSessions({events: data, loaded: true})).catch(err => console.log(err))

    }, [])
    
    return (
        <View style={styles.screenContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.welcomeText}>
                    Join a tutoring session with {tutorState.first_name}!
                </Text>
            </View>
            <View style={styles.buttonContainer}>
                <Image
                    source={{uri: tutorState.profile_url}}
                    style={styles.tutorImage}
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
            <View style={styles.reviewsContainer}>
                {sessions.loaded ? <SessionEvents eventsList={sessions.events} tutor_id={tutorState.id}/> : <LoadingItem />}    
            </View>    
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
        flex: 2.5,
        padding: 10
    },
    reviewsContainer: {
        flex: 3,
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly', 
        paddingBottom: 10
    }
})