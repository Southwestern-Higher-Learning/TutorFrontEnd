import React, {useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native'
import {PressableButton} from '../components/PressableButton'

export const TutorItem = ({navigation, tutor})=>{

    const [tutorState, setTutor] = useState(tutor)

    return (
        <View style={styles.container}>
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center'}}>
                <View style={styles.userImage}>
                        <Image
                            source={{uri: tutorState.profile_url}}
                            style={styles.image}
                        />
                </View>
                <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={styles.cardNameText}>{tutorState.first_name} {tutorState.last_name}</Text>
                </View>
            </View>
             <Text style={styles.textContentText}>{tutor.description}</Text>
             <View style={{paddingBottom: 10, width: '100%', alignItems: 'center'}}>
                <PressableButton 
                buttonText="Schedule"
                actionOnPress={()=>{
                    navigation.navigate('Schedule', {tutorState})
                }}
                />
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
    }
})