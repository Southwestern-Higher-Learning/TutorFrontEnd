import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ReviewItem = ({reviewText, starCount}) => {
    return(
        <View style={styles.reviewContainer}>
            <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewText}>"{reviewText}"</Text>
            </View>
            <View style={styles.reviewStarContainer}>
                <Text style={styles.stars}>{starCount}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    reviewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        width: 300,
        borderWidth: 2,
        borderColor: '#828282',
        borderRadius: 5,
        marginHorizontal: 20
    },
    reviewTextContainer: {
        flex: 4,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    reviewText: {
        fontSize: 16,
        fontFamily: 'HKGroteskRegular'
    },
    reviewStarContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    stars: {
        fontSize: 12
    }
})
