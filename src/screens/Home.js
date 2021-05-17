import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Card from '../components/Card';


export default function Home() {
  const cardData = useSelector(state=>{
    return state
  })
  return (
    <View style={styles.container}>
        <Header />
        <FlatList
                data={cardData}
                renderItem={({item})=>{
                    return <Card
                    videoId={item.id.videoId}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item=>item.id.videoId}
            />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,

  },
});
