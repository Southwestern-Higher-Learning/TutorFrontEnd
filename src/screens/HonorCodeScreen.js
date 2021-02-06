import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native'
import Hyperlink from 'react-native-hyperlink'


export const HonorCodeScreen = ({route, navigation})=>{
    return (
        <View style={styles.container}>
            {route.params.userName ? <Text>Welcome {route.params.userName}</Text>: null}
            <Text style={styles.text}>
                This application was developed to support the Southwestern Community with cooperation from the Center for Academic Success. As such, the restrictions outlined in the Southwestern University Honor Code and the Student handbook. Any actions you take within the application are still subject to the Honor Code and Student Handbook. 
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
                        onPress={()=>navigation.navigate('HomeTabs')}
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
    text: {width: '80%', textAlign: 'justify', fontSize: 17, fontWeight: '300'}
})