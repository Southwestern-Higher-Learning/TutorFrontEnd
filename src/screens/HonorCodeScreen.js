import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'
import Hyperlink from 'react-native-hyperlink'
import { LoginUser } from '../providers/LoginUser'
import { useUser } from '../providers/UserContextProvider'

export const HonorCodeScreen = ({route, navigation})=>{
    const { dispatch } = useUser()

    
    return (
        <View style={styles.container}>
            {route.params.userName ? <Text>Welcome {route.params.userName}</Text>: null}
            <Text style={styles.text}>
                This application was developed to support the Southwestern Community with cooperation from the Center for Academic Success. As such, the restrictions outlined in the Southwestern University Honor Code and the Student handbook apply to any actions you take within the application.
            </Text>
            <View style={styles.inner}>
            <Text style={styles.text}>
                If you have any questions, please contact: 
            </Text>
            <Hyperlink
                style={{paddingTop: 10}}
                linkDefault={true}
                linkText={ url => url === 'https://www.southwestern.edu/offices/success/' ? 'The Center for Academic Success' : url }>
                    <Text style={ { fontSize: 17, fontWeight: '300', textAlign: 'justify', color: 'blue', position: 'relative', justifyContent: 'center'} }>
                   https://www.southwestern.edu/offices/success/
                    </Text>
                </Hyperlink>
            </View>
            
            <View style={styles.inner}>
                <Text>
                    Do you accept?
                </Text>
                    <View
                        style={styles.decisionBox}
                    >
                        <Button
                        onPress={()=>{
                            LoginUser().then(response=>{
                                // secure store refresh token
                                dispatch({message: "SET", payload: response})
                                navigation.navigate('HomeTabs')
                            })
                        }}
                        title="Yes"
                        />
                        <Button
                        onPress={()=>navigation.goBack()}
                        title="No"
                        />
                    </View>
                </View>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    decisionBox: {
        flexDirection: 'row',
        width: 200,
        paddingTop: 30,
        justifyContent: 'space-around'
    },
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    inner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {width: '80%', textAlign: 'center', fontSize: 17, fontWeight: '300'}
})