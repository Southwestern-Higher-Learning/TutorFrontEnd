import React from "react"
import { StyleSheet, View, Text } from 'react-native'

export const NoReviews = ({NoReviewsText}) => {
    return(
        <View style={styles.container}> 
            <Text style={styles.noReviewText}>{NoReviewsText}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems:'center',
        justifyContent: 'center',
        borderColor: "#828282",
        borderWidth: 1.5,
        borderRadius: 10,
        height: '75%',
        width: '85%'
    }, 
    noReviewText : {
        fontFamily: 'HKGroteskRegular',
    }
})