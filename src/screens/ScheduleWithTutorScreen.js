import React from 'react';
import { View, Text, StyleSheet, Image, Modal, Pressable } from 'react-native'
import { TutorReviews } from '../components/TutorReviews.js'
import { CardItem } from '../components/CardItem.js'
import { PressableButton } from '../components/PressableButton.js'


export const ScheduleWithTutorScreen = ({route, navigation})=>{
    const tempReviewList = [
        {reviewText: "Antonia is the best tutor in the world!!",
        starCount: "☆ ☆ ☆ ☆",
        id: '0'},
        {reviewText: "Antonia is the reason I finally understand stuff.",
        starCount: "☆ ☆ ☆ ☆",
        id: '1'},
        {reviewText: "omg someone actually taught me something.",
        starCount: "☆ ☆ ☆ ☆",
        id: '2'},
    ]

    console.log(route.params)
    const {tutorState} = route.params
    // need to add reviews, style page, generate calendar info, schedule with tutor
    // need to make reviews from profile screen a separate ui component so we can use that here

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
                    buttonText='Schedule'
                    actionOnPress={()=>{
                        console.log("presssssssssssssssed")
                    }}
                />
            </View>
            <View style={styles.cardContainer}>
                <CardItem 
                // One option is take out description and just have review when
                // The user *
                textContent= {tutorState.description}
                cardName= {`About ${tutorState.first_name}`}
                />
            </View>
            <View style={styles.reviewsContainer}>
                <TutorReviews reviewList={tempReviewList}/>
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
        flex: 1,
        padding: 10
    },
    reviewsContainer: {
        flex: 2,
        marginTop: 20,
        justifyContent: 'space-between', 
        alignItems: 'center'
    }, 
    buttonContainer: {
        flex: 1,
        width: '100%',
        //alignItems: 'space-evenly',
        justifyContent: 'flex-end',
        
    },
})