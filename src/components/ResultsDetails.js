import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    image : {
        width : 250,
        height : 120,
        borderRadius : 5,
        marginBottom: 5
        
    },
    name : {
        fontWeight : 'bold',

    },
    container :{
        marginLeft : 15,

    }
})

const ResultsDetails = ({ result }) => {
    console.log(result)
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: result.image_url}}/>
            <Text style={styles.name}>{result.name}</Text>
            <Text>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>

        </View>

    )
}

export default ResultsDetails