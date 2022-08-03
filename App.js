
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicatorBase, Button, FlatList,StyleSheet, Text, Touchable, View } from 'react-native';
import { ActivityIndicator, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import MainStacks from './src/Navigation/MainStacks';




export default function App() {


  
  return (
   <SafeAreaView style={ {flex: 1 } } >
    <MainStacks/>
   </SafeAreaView>
  );
}
