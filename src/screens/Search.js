import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import API_KEY from '../../API';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '@react-navigation/native';


const Search = ({navigation})=>{
    const {colors} = useTheme();
    const iconColor = colors.iconColor;
    const dispatch = useDispatch()
    const [value, setValue] = useState()
    const miniCardData = useSelector(state=>{
        return state.cardData
    })
    const [loading, setLoading] = useState(false)

    const fetchData = ()=>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${value}&type=video&key=${API_KEY}`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            dispatch({type:"add", payload:data.items})
        })
  
    }


    return(
        <View>
            <View style={{
            flexDirection:'row', 
            padding: 5, 
            justifyContent:'space-around',
            elevation: 5,
            shadowOffset: {width:2.5,height: 2.5, },
            shadowColor: 'gray',
            shadowOpacity: 1.0, 
            backgroundColor:colors.headerColor,}}>
                <Ionicons name="md-arrow-back" size={32}
                onPress={()=>navigation.goBack()} color={iconColor}/>
                <TextInput 
                value = {value}
                onChangeText = {(text)=>{
                    setValue(text)
                }}
                style={{width:'70%', backgroundColor:colors.backgroundColor,borderWidth:1, borderColor:colors.border, padding:5, color:colors.iconColor}}
                />
                 <Ionicons color={iconColor} name="md-send" size={29} onPress={()=>fetchData()}/>
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
            />
        </View>
    )
}

export default Search;