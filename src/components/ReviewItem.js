import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const ReviewItem = ({reviewText, starCount}) => {

    return(
        <View style={styles.reviewContainer}>
            <View style={styles.reviewStarContainer}>
                <Text style={styles.stars}>{starCount}</Text>
            </View>
            <View style={styles.reviewTextContainer}>
                <Text style={styles.reviewText}> {reviewText}</Text>
            </View>
        </View>
    );

};

const styles = StyleSheet.create({
    reviewContainer: {
        flex: 1,
        justifyContent: 'center',         
    },
    reviewTextContainer: {
        flex: 10,
    },
    reviewText: {
        fontSize: 15,
    },
    reviewStarContainer: {
        flex: 1,
        alignItems: 'center',
    },
    stars: {
        fontSize: 12
    }
})
