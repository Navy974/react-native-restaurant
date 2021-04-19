import React, { useState, useEffect } from 'react'
import {View, Text, StyleSheet, ScrollView} from 'react-native'
import SearchBar from '../components/SearchBar'
import useResult from '../hooks/useResult'
import ResultsList from '../components/ResultsList'

const styles = StyleSheet.create({
    bar:{
        borderRadius: 5
    }
})

const SearchScreen = ()=> {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult();

    const filterResultsByPrice = price => {
        // price ==== '€' || '€€' || '€€€'
        return results.filter(result => {
            return result.price === price
        });
    };

    return (

     <>
            <SearchBar 
            style={styles.bar}
            term = {term}
            onTermChange = {setTerm}
            onTermSubmit = {()=> searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
           
            <ScrollView>

                <ResultsList  results={filterResultsByPrice('€')} title="Cost Effective"/>
                <ResultsList results={filterResultsByPrice('€€')} title="Bit Pricier "/>
                <ResultsList results={filterResultsByPrice('€€€')} title="Big Spender"/>

            </ScrollView>
    </>
           
           
       
    )
};

export default SearchScreen;