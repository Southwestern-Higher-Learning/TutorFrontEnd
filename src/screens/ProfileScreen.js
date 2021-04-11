import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useUser } from '../providers/UserContextProvider';
import { CardItem } from '../components/CardItem'
import { TutorReviews } from '../components/TutorReviews.js'
import { PressableButton } from '../components/PressableButton.js'
import { NoReviews } from '../components/NoReviews.js'

export const ProfileScreen = ({navigation}) => {
    const { state } = useUser()
    console.log(state)
    // we need to do some kind of state verification before rendering this page
    return (
        
        <View style={styles.screenContainer}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Profile</Text>
            </View>
            <View style={styles.userNameContainer}>
                <View style={styles.userImage}>
                    <Image
                        source={{uri: state.user.profile_url}}
                        style={styles.image}
                    />
                </View>
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flex: 2}}>
                    <Text style={styles.userNameText}>
                        {state.user.first_name} {state.user.last_name}
                    </Text>
                    {state.user.is_tutor? <Text style={styles.tutorText}>Southwestern academic guide</Text> : null}
                </View> 
            </View>
            <View style={styles.buttonsContainer}>
                <PressableButton
                    buttonText="Edit"
                    actionOnPress={()=>{
                        navigation.navigate('editProfile')
                    }}
                />
                <PressableButton
                    // Need to make decision about what is loaded on schedule once we have google calendar api figured out
                    buttonText="Schedule"
                    actionOnPress={()=>{
                       console.log("Pressed")
                    }}
                />
            </View>
            <View style={styles.aboutMeContainer}>
                <CardItem 
                // check to see if the user has updated their description, if they haven't give them a message to update it. 
                textContent={state.user.description}
                cardName={"about me"}
                />
            </View> 
            {state.reviews ? (<View style={styles.reviewsContainer}> 
                <TutorReviews reviewList={state.reviews} />
            </View>) : (<View style={styles.reviewsContainer}>
                <NoReviews NoReviewsText='You currently do not have any reviews! When students review your sessions you will be able to see what they thought!' />
            </View>)}
        </View>
        
    )
}

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBFBF8',
    },
    headerContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#ffcd20',
    },
    headerText: {
        fontSize: 30,
        fontWeight: '400',
        fontFamily: 'PlayfairDisplay',
    },
    userNameContainer: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    userImage:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
        resizeMode: 'contain',
        borderWidth: 2,
        borderColor: '#828282'
    },
    userNameText: {
        fontSize: 22,
        fontWeight: '400',
        fontFamily: 'PlayfairDisplay'
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    aboutMeContainer: {
        flex: 2,
        width: '90%',
        alignItems: 'center',
    },
    reviewsContainer: {
        flex: 4,
        marginTop: 80,
    },
    tutorText: {
        fontSize: 10,
        fontFamily: 'HKGroteskRegular',
        fontWeight: '300'
    }
})