
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicatorBase, Button, FlatList,StyleSheet, Text, Touchable, View } from 'react-native';
import { ActivityIndicator, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native-web';
import axios from 'axios'



const Register =async (value,navigation)=>{
    const { email, password, confirmPassword, name, profession, identification } = value;
try {
  const  RegisterUser=await axios.post('http://localhost:3001/register',{
    email, password, confirmPassword, name, profession, identification
  })
    if (RegisterUser.status == 200) {
        navigation.navigate('Home')
        
    }
} catch (error) {

   console.log(error)

    
}


}


export default function App({navigation}) {
const [input,setInput]=useState({
    name:"", 
    email:"", 
    password:"", 
    confirmPassword:"", 
    profession:"", 
    identification:""

})

  
  return (
   <SafeAreaView style={ {flex: 1 ,backgroundColor:'#09C184'} } >
    < View style={{ flex: 1, backgroundColor: '#0C5149' }} ></View>
    < View style={{ flex: 13, padding:'5vh', alignItems:'center',justifyContent:'center', backgroundColor: '#09C184' }} >

    <Text style={{fontSize:'30px', marginBottom:'20px'}} >Register</Text>

    <Text  >Username</Text>
    <TextInput
         style={styles.input}
         value={input.name}
        onChangeText={(e)=>setInput({...input,name:e})}

        placeholder="Username..."
      />

<Text  >email</Text>
    <TextInput
         style={styles.input}
         value={input.email}
        onChangeText={(e)=>setInput({...input,email:e})}
        placeholder="Email..."
      />
<Text  >identification</Text>
    <TextInput
         style={styles.input}
         value={input.identification}
        onChangeText={(e)=>setInput({...input,identification:e})}

        placeholder="Identification..."
      />

<Text  >profession</Text>
    <TextInput
         style={styles.input}
         value={input.profession}
        onChangeText={(e)=>setInput({...input,profession:e})}

        placeholder="Profession..."
      />

      
 
    <Text  >Password</Text>
    <TextInput
         style={styles.input}
        onChangeText={(e)=>setInput({...input,password:e})}
        value={input.password}
        placeholder="Password..."
         keyboardType="numeric"
      />
    <Text  >Cofirm Password</Text>
    <TextInput
         style={styles.input}
        onChangeText={(e)=>setInput({...input,confirmPassword:e})}
         value={input.confirmPassword}
        placeholder="Cofirm password..."
      />

      <View style={{ width:'40%'}}>
      <TouchableOpacity
      style={{margin:'2%' , backgroundColor:'#0C5149', height:'50%', alignItems: "center",
      justifyContent: "center",}}
      onPress={()=>Register(input,navigation)}
      >
       <Text> Register</Text>
      </TouchableOpacity>


      

      <TouchableOpacity
      style={{margin:'2%'  , backgroundColor:'#0C5149', height:'50%',alignItems: "center",
      justifyContent: "center",}}
      onPress={()=>{
        navigation.navigate('Login')
      }}
      >
       <Text> tap to Login</Text>

        
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