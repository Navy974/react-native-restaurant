import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import ResultsDetails from './ResultsDetails'
import { useNavigation } from '@react-navigation/native'


const styles = StyleSheet.create ({
    title: {
        fontSize : 18,
        fontWeight : 'bold',
        marginLeft : 15,
        marginBottom : 5
    },
    container : {
        marginBottom : 10
    }
})

const ResultsList = ({ title, results }) => {

    if(!results.length) {
        return null
    }
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={result => result.id}
            renderItem={({ item })=> {
                return(
                    <TouchableOpacity onPress={()=> navigation.push('Results Show',{ id: item.id })}>
                         <ResultsDetails result={item} />
                    </TouchableOpacity>
                )
            }}
            />
        </View>
    )
}

export default ResultsList

