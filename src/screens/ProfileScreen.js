import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useUser } from '../providers/UserContextProvider'


export const ProfileScreen = () => {

    const { state } = useUser()
    
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

            </View>
            <View style={styles.reviewsContainer}>

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
    fontStyle: 'italic',
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
    justifyContent: 'center',
},
reviewsContainer: {
    flex: 4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
}
})