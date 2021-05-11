import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Search = ()=>{
    const [value, setValue] = useState()
    return(
        <View style={{flex:1}}>
            <View style={{flexDirection:'row', padding: 5, 
            justifyContent:'space-around',
            elevation: 5,
            shadowOffset: {width:2.5,height: 2.5, },
            shadowColor: 'gray',
            shadowOpacity: 1.0, 
            backgroundColor:'white',}}>
                <Ionicons name="md-arrow-back" size={32}/>
                <TextInput 
                value = {value}
                onChangeText = {(text)=>{
                    setValue(text)
                }}
                style={{width:'70%', backgroundColor:"#e6e6e6"}}
                />
                 <Ionicons name="md-send" size={29}/>
            </View>
        </View>
    )
}

export default Search;