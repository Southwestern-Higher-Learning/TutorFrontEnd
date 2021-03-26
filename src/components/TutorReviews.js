import React from "react"
import { FlatList, View } from "react-native"
import { ReviewItem } from '../components/ReviewItem.js'

export const TutorReviews = ({reviewList}) => {
    return(
        <View>
            <FlatList
            snapToAlignment={'top'}
            horizontal
            data={reviewList}
            keyExtractor={result=> result.id} 
            showsHorizontalScrollIndicator={false}
            renderItem={( {item} )=> {
                return <ReviewItem reviewText={item.reviewText} starCount={item.starCount} />
            }}
            />
         </View>
    )
}