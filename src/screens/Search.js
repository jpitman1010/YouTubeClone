import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import API_KEY from '../../API';

const Search = ()=>{
    
    const [value, setValue] = useState()
    const [miniCardData, setMiniCardData] = useState('')
    const [loading, setLoading] = useState(false)

    const fetchData = ()=>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            setMiniCardData(data.items)
        })
  
    }


    return(
        <View style={{flex:1}}>
            <View style={{
            flexDirection:'row', 
            padding: 5, 
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
                 <Ionicons name="md-send" size={29} onPress={()=>fetchData()}/>
            </View>
           {loading ?<ActivityIndicator size="large" color="red" style={{marginTop:10}}/>
            :null}
            <FlatList
                data={miniCardData}
                renderItem={({item})=>{
                    return <MiniCard
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    
                    />
                }}
                keyExtractor={item=>item.id.videoId}
            >
            </FlatList>
        </View>
    )
}

export default Search;