import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { useUser } from '../providers/UserContextProvider';
import { ReviewItem } from '../components/ReviewItem.js'
import { CardItem } from '../components/CardItem'
import { Ionicons } from '@expo/vector-icons';



export const ProfileScreen = ({navigation}) => {
    const tempReviewList = [
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
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', flex: 2}}>
                    <Text style={styles.userNameText}>
                        {state.user.first_name} {state.user.last_name} {state.user.is_tutor ? <Ionicons name="school" color={'black'} size={20} /> : null}
                    </Text> 
                </View> 
            </View>
            <View style={styles.buttonsContainer}>
                <Pressable style={styles.editButton}
                onPress={()=>{
                    navigation.navigate('editProfile')
                }}
                >
                    <Text style={styles.buttonText}>Edit</Text>
                </Pressable>
                <View style={styles.scheduleButton}>
                    <Text style={styles.buttonText}>Schedule</Text>
                </View>
            </View>
            <View style={styles.aboutMeContainer}>
                <CardItem 
                textContent={state.user.description}
                cardName={"about me"}
                />
            </View>
            
            <View style={styles.reviewsContainer}>
                <FlatList 
                snapToAlignment={'top'}
                horizontal
                data={tempReviewList}
                keyExtractor={result => result.id}
                showsHorizontalScrollIndicator={false}
                renderItem={( {item} )=>{
                    return <ReviewItem reviewText={item.reviewText} starCount={item.starCount}/>
                }}
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
        justifyContent: 'space-evenly',
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
        fontSize: 24,
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
        flex: 2,
        width: '90%',
        alignItems: 'center',
    },
    reviewsContainer: {
        flex: 4,
        marginTop: 80,
    },
    reviewsText: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        fontFamily: 'HKGroteskRegular',
    },
    buttonText: {
        fontFamily: 'HKGroteskSemiBold',
        fontSize: 20,
    },
    tutorText: {
        fontSize: 12,
        fontFamily: 'HKGroteskRegular',
        fontWeight: '300'
    }
})