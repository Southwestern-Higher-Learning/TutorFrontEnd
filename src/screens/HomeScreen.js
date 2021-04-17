import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HyperLink from 'react-native-hyperlink';
import {useUser} from '../providers/UserContextProvider'
import {LoadingItem} from '../components/LoadingItem'
import {Sessions} from '../providers/Sessions'
import {SessionEvents} from '../components/SessionEvents'
import Icons from '@expo/vector-icons'


export const HomeScreen = () => {

    const { state } = useUser()
    const [screenState, setScreenState] = React.useState({loaded: false, events: []})

    React.useEffect(()=>{

        Sessions(state.user.id).then(data => setScreenState({loaded: true, events: data})).catch(err => console.log(err))

    }, [])


    return (
        
        <View style={styles.container}>
            <View style={styles.headerContainer}>

                <Text style={styles.headerText}>Home</Text>

            </View>
            <View style={styles.bookedSessionsBox}>
                <Text style={styles.textOverGradient}>Upcoming Sessions</Text>
                   {/* <Icons name="calendar-outline"/> DOES NOT WORK */}
                    <View style={styles.eventContainer}>
                        {screenState.loaded ? 
                        (<SessionEvents 
                        eventsList={screenState.events}
                        tutor_id={false}/>) : 
                        (<LoadingItem />)}
                    </View>
                
            </View>
            <View style={styles.helpfulInfo}>
                <Text style={styles.textOverGradient}>Additional Resources</Text>
                <HyperLink
                     linkDefault={true}
                     linkText={ url => url === 'https://southwestern.az1.qualtrics.com/jfe/form/SV_9nT4SX4cpdiWGG1' ? 'Survey for courses you think should provide tutoring' : url}>
                       <Text style={styles.linkText}>
                        https://southwestern.az1.qualtrics.com/jfe/form/SV_9nT4SX4cpdiWGG1
                       </Text>
                    </HyperLink>
                <View>
                    <Text style={styles.textOverGradient}>Before meeting with your consultant </Text>
                </View>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#FBFBF8'
    },
    headerContainer: {
        flex: 0.75, 
        width:'100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#ffcd20'
    },
    headerText: {
        fontSize: 30,
        fontWeight: '400',
        fontFamily: 'PlayfairDisplay',
    },
    bookedSessionsBox: {
        flex: 3,
        marginTop: 10,
        borderRadius: 10,
        height: 200,
        width: '85%',
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textOverGradient: {
        paddingTop: 10,
        fontSize: 16,
        fontFamily: 'HKGroteskRegular'
    },
    helpfulInfo: {
        flex: 4,
        marginTop: 15,
        width: '85%',
        height: 400,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    }, 
    linkText: {
        fontSize: 14, 
        fontWeight: '300', 
        textAlign: 'justify', 
        color: 'blue', 
        position: 'relative', 
        justifyContent: 'center',
        fontFamily: 'HKGroteskRegular'
    },
    eventContainer: {
        paddingTop: 20
    }
})