
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicatorBase, Button, FlatList,StyleSheet, Text, Touchable, View } from 'react-native';
import { ActivityIndicator, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';




const Loged =async (value,navigation)=>{
    const { name, password } = value;

       let Loaded=await axios.post('http://localhost:3001/loadUser',{name, password })
       if (Loaded.status == 200) {
        await AsyncStorage.setItem('storage_Key', Loaded.data)

      return   navigation.navigate('Home')
        
    }
    
    
    }
    
export default function App({navigation}) {
    const [input,setInput]=useState({
        name:"", 
        password:"", 
    })
    

  
  return (
   <SafeAreaView style={ {flex: 1 ,backgroundColor:'#09C184'} } >
    < View style={{ flex: 1, backgroundColor: '#0C5149' }} ></View>
    < View style={{ flex: 13, padding:'5vh', alignItems:'center',justifyContent:'center', backgroundColor: '#09C184' }} >

    <Text style={{fontSize:'30px', marginBottom:'20px'}} >Login</Text>

    <Text  >Username</Text>
    <TextInput
         style={styles.input}
        onChangeText={(e)=>setInput({...input,name:e})}

         value={input.name}
        placeholder="Username..."
      />

    <Text  >Password</Text>
    <TextInput
         style={styles.input}
         onChangeText={(e)=>setInput({...input,password:e})}

         value={input.password}
        placeholder="Password..."
      />

      <View style={{ width:'40%'}}>
      <TouchableOpacity
      style={{margin:'2%' , backgroundColor:'#0C5149', height:'50%', alignItems: "center",
      justifyContent: "center",}}
      onPress={()=>Loged(input,navigation)}
      >
       <Text> Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
      style={{margin:'2%'  , backgroundColor:'#0C5149', height:'50%',alignItems: "center",
      justifyContent: "center",}}
      onPress={()=>{
        navigation.navigate('Register')
      }}
      >
       <Text> tap to Register</Text>

        
      </TouchableOpacity>
     
      </View>
      
      
    </View>
  
    < View style={{ flex: 1, backgroundColor: '#0C5149' }} >
    </View>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#09C184',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor:'#D9D9D9',
    border:'none',
    borderRadius:'5%',
    placeholderTextColor:"#000" 
    
  }
});
const styless = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
});