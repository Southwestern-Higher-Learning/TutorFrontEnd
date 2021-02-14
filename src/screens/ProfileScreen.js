import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useUser } from '../providers/UserContextProvider';
import { ReviewItem } from '../components/ReviewItem.js'



export const ProfileScreen = () => {
    
    const { state } = useUser()
    // at it's current state, reviews with be a flat list and we'll iterate through the reviews to create a horizontal flat list that the user can swipe through
    // the styling is still part way done. We think we'll use some card style for the text data. Mostly we're just working on the logic

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
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={styles.userNameText}>
                        {state.user.first_name} {state.user.last_name}
                    </Text>
                </View> 
            </View>
            <View style={styles.buttonsContainer}>
                <View style={styles.editButton}>
                    <Text>Edit</Text>
                </View>
                <View style={styles.scheduleButton}>
                    <Text>Schedule</Text>
                </View>
            </View>
            <View style={styles.aboutMeContainer}>
                <Text style={styles.aboutMeTitle}> 
                    About Me
                </Text>
                <Text style={styles.aboutMeText}>
                    This is a paragraph talking about myself. This is me testing what is going to happen if the text is super long and if its going to wrap around.
                </Text>
            </View>
            <View style={styles.reviewsContainer}>
                <Text style={styles.reviewsText}>Reviews</Text>
                <ReviewItem
                    reviewText={" Ethan was the worst Tutor that I have ever had ever!!!"}
                    starCount={"☆ ☆ ☆ ☆"}
                />
            </View>
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
    flex: 1.25,
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
    flex: 3,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
},
userImage:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
},
image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    resizeMode: 'contain',
},
userNameText: {
    fontSize: 25,
    fontWeight: '400',
},
buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
},
editButton: {
    height: 45,
    width: '36%',
    borderRadius: 23, 
    backgroundColor: '#ffcd20',
    justifyContent: 'center',
    alignItems: 'center',
},
scheduleButton: {
    height: 45,
    width: '36%',
    opacity: 0.9,
    borderRadius: 23, 
    backgroundColor: '#ffcd20',
    justifyContent: 'center',
    alignItems: 'center',
},
aboutMeContainer: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
},
aboutMeTitle: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
},
aboutMeText:{
    fontSize: 15,
},
reviewsContainer: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
},
reviewsText: {
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
}
})