import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import HyperLink from 'react-native-hyperlink';


export const HomeScreen = () => {
    return (
        
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>Home Screen</Text>
            </View>
            <View style={styles.bookedSessionsBox}>
                <Text style={styles.textOverGradient}>Your Upcoming Sessions</Text>
                <Text style={styles.textOverGradient}>Some other text of upcoming appointments</Text>
            </View>
            <View style={styles.helpfulInfo}>
                <Text style={styles.textOverGradient}>Additional Resources</Text>
                    <View>
                    <HyperLink
                     linkDefault={true}
                     linkText={ url => url === 'https://southwestern.az1.qualtrics.com/jfe/form/SV_9nT4SX4cpdiWGG1' ? 'Survey for courses you think should provide tutoring' : url}>
                       <Text style={styles.linkText}>
                        https://southwestern.az1.qualtrics.com/jfe/form/SV_9nT4SX4cpdiWGG1
                       </Text>
                    </HyperLink>
                    </View>
                    
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
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textOverGradient: {
        color: 'white', 
        fontFamily: 'HKGroteskRegular'
    },
    helpfulInfo: {
        flex: 4,
        marginTop: 15,
        width: '85%',
        height: 400,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 10
    }, 
    linkText: {
        fontSize: 12, 
        fontWeight: '300', 
        textAlign: 'justify', 
        color: 'blue', 
        position: 'relative', 
        justifyContent: 'center',
        fontFamily: 'HKGroteskRegular'
    }
})