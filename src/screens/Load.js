

import Loading from '../../assets/logo.png'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FlatList, Text,  View,Image,ImageBackground, ActivityIndicator } from 'react-native';

export default function Load({navigation}) {
  
    useEffect(() => {
        getData(navigation)

    }, [])
    

    const getData = async (navigation) => {
        try {
          const value = await AsyncStorage.getItem('storage_Key')
          if(Object.keys(value).length > 1) {
            // value previously stored
            navigation.navigate('Home')

          } 

        } catch(e) {
          navigation.navigate('Login')

          // error reading value
        }
      }
  return (
    <View style={{   flex: 1, backgroundColor:'gray'}}>
 <ActivityIndicator style={{flex:1}} size="large" color="#00ff00" />
    

          </View>
      
        

    

  )
}
