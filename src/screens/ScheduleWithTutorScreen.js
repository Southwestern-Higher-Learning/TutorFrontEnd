import React from 'react';
import { View, Text, StyleSheet, Image, Modal, Pressable } from 'react-native'
import { TutorReviews } from '../components/TutorReviews.js'
import { CardItem } from '../components/CardItem.js'
import { PressableButton } from '../components/PressableButton.js'
import { NoReviews } from '../components/NoReviews.js'


export const ScheduleWithTutorScreen = ({route, navigation})=>{
    // Still need to handle what happens if a tutor has no reviews
    // Still need to handle the tutor getting actual reviews made by students
    // const tempReviewList = [
    //     {reviewText: "Antonia is the best tutor in the world!!",
    //     starCount: "☆ ☆ ☆ ☆",
    //     id: '0'},
    //     {reviewText: "Antonia is the reason I finally understand stuff.",
    //     starCount: "☆ ☆ ☆ ☆",
    //     id: '1'},
    //     {reviewText: "omg someone actually taught me something.",
    //     starCount: "☆ ☆ ☆ ☆",
    //     id: '2'},
    // ]

    const {tutorState} = route.params
    
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
                        console.log("presssssssssssssssed")
                    }}
                />
            </View>
            <View style={styles.cardContainer}>
                <CardItem 
                textContent= {tutorState.description}
                cardName= {`About ${tutorState.first_name}`}
                />
            </View>
            {tutorState.reviews ? (<View style={styles.reviewsContainer}> 
                <TutorReviews reviewList={tutorState.reviews} />
            </View>) : (<View style={styles.reviewsContainer}>
                <NoReviews NoReviewsText='You currently do not have any reviews! When students review your sessions you will be able to see what they thought!'/>
            </View>)}
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
})