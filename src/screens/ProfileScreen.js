import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { useUser } from '../providers/UserContextProvider';
import { CardItem } from '../components/CardItem'
import { TutorReviews } from '../components/TutorReviews.js'
import { PressableButton } from '../components/PressableButton.js'



export const ProfileScreen = ({navigation}) => {
    // we need to actually get reviews
    // then generate reviewList which will need to be stored in state so they can be rendered
    const reviewList = [
        {reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nec mi quis scelerisque. In consequat libero feugiat dolor varius, ut mollis ante mollis. Morbi malesuada tincidunt risus id aliquet. Aenean condimentum, nunc a dignissim imperdiet, lacus orci ornare risus, at elementum tellus purus et quam. Sed rhoncus, elit pulvinar convallis blandit, velit dolor fermentum tortor, vitae placerat sem neque et eros.",
        starCount: "☆ ☆ ☆ ☆",
        id: '0'},
        {reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nec mi quis scelerisque. In consequat libero feugiat dolor varius, ut mollis ante mollis. Morbi malesuada tincidunt risus id aliquet. Aenean condimentum, nunc a dignissim imperdiet, lacus orci ornare risus, at elementum tellus purus et quam. Sed rhoncus, elit pulvinar convallis blandit, velit dolor fermentum tortor, vitae placerat sem neque et eros.",
        starCount: "☆ ☆ ☆ ☆",
        id: '1'},
        {reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nec mi quis scelerisque. In consequat libero feugiat dolor varius, ut mollis ante mollis. Morbi malesuada tincidunt risus id aliquet. Aenean condimentum, nunc a dignissim imperdiet, lacus orci ornare risus, at elementum tellus purus et quam. Sed rhoncus, elit pulvinar convallis blandit, velit dolor fermentum tortor, vitae placerat sem neque et eros.",
        starCount: "☆ ☆ ☆ ☆",
        id: '2'},
        {reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nec mi quis scelerisque. In consequat libero feugiat dolor varius, ut mollis ante mollis. Morbi malesuada tincidunt risus id aliquet. Aenean condimentum, nunc a dignissim imperdiet, lacus orci ornare risus, at elementum tellus purus et quam. Sed rhoncus, elit pulvinar convallis blandit, velit dolor fermentum tortor, vitae placerat sem neque et eros.",
        starCount: "☆ ☆ ☆ ☆",
        id: '3'},
        {reviewText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rhoncus nec mi quis scelerisque. In consequat libero feugiat dolor varius, ut mollis ante mollis. Morbi malesuada tincidunt risus id aliquet. Aenean condimentum, nunc a dignissim imperdiet, lacus orci ornare risus, at elementum tellus purus et quam. Sed rhoncus, elit pulvinar convallis blandit, velit dolor fermentum tortor, vitae placerat sem neque et eros.",
        starCount: "☆ ☆ ☆ ☆",
        id: '4'}
    ]
    const { state } = useUser()
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
            {reviewList ? (<View style={styles.reviewsContainer}> 
                <TutorReviews reviewList={reviewList} />
            </View>) : null /**replace this null with placeholder for when there's no reviews */}
            
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