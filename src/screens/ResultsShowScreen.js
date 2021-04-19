import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import yelp from '../api/yelp'


const styles = StyleSheet.create({
    image:{
        height: 200,
        width : 300
    }
})

const ResultsShowScreen = ({ navigation, route }) => {
    const [result, setResult] = useState(null)
    const { id } = route.params

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }


    useEffect(()=> {
        getResult(id)
    }, [])

    if(!result) {
        return null
    }

    return(
        <View>
            <Text> {result.name}</Text>
            <FlatList 
            data={result.photos}
            keyExtractor={(photo)=> photo}
            renderItem={({ item })=> {
                return <Image style={styles.image} source={{uri: item}} />
            }}
            />
        </View>
    )
}

export default ResultsShowScreen;
