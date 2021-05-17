import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Provider } from 'react-redux';
import { createStore } from 'redux';


import Home from './src/screens/Home';
import Search from './src/screens/Search';
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import Constant from 'expo-constants';
import { MaterialIcons } from '@expo/vector-icons';
import { ReactReduxContext } from 'react-redux';
import { reducer } from './src/reducers/reducer';

const store = createStore()

const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const RootHome = ()=>{
  return(
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = 'home'
        } else if (route.name === 'Explore') {
          iconName = 'explore';
        }
        else if (route.name === 'Subscribe') {
          iconName = 'subscriptions'
        }
        // You can return any component that you like here!
        return <MaterialIcons name={iconName} size={28} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
  >
      <Tabs.Screen name="Home" component={Home}/>
      <Tabs.Screen name="Explore" component={Explore}/>
      <Tabs.Screen name="Subscribe" component={Subscribe}/>
    </Tabs.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Root Home" component={RootHome} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Video Player" component={VideoPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
   </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
