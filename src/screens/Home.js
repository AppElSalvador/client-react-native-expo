import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'

import { FlatList, Text,  View,Image } from 'react-native';
import { Button, TouchableOpacity } from 'react-native-web';
import io from "socket.io-client";


export default function Home() {
    const [service,setService]=useState([])
    const [message,setMessage]=useState([])
    const [s,sS]=useState([])


const socket=useRef()

useEffect(() => {
socket.current =  io("http://192.168.1.106:3001")

  socket.current.on('msg-recieve', (e) =>{
console.log(e)

 const msgs = [...message];
 msgs.push(e);

setMessage(msgs);

  })

  GetService()
  
return()=>{
  socket.current.close();
}

}, [])






const GetService= async()=>{
    let AllService = await axios("http://localhost:3001/allservice")
    setService(AllService.data)
}
    
    const send=()=>{
     

      socket.current.emit('chat',`q`)
      console.log(message)
    }
   
    const ssend=()=>{
     

      socket.current.emit('message',`casa`)
      console.log(message)
    }
   
  return (
    <View>
      <TouchableOpacity
     
      onPress={()=> send()}
      >
<Text>message</Text>
      </TouchableOpacity>

      <TouchableOpacity
     
     onPress={()=> ssend()}

     >
<Text>message</Text>
     </TouchableOpacity>


<FlatList
data={message}
renderItem={({item})=> (   
  <View >

  <Text >{item}</Text>
  </View >

)}/>


    {service?    <FlatList
        horizontal
        data={service}
        renderItem={({item})=> (         
            <View >
            <Text >{item.title}</Text>
            <Text >{ `$${item.price}` }</Text>

            <FlatList
            horizontal
            data={item.image}
            renderItem={({item})=>(
               
            
                    <Image
                    style={{    width: 50,
                        height: 50,}}
                    source={{uri:item.url}}
                    
                    resizeMode="cover"/>
          

            )}

            />

          </View>
        )

            
         }
        

        />:<Text>Loading</Text>}

    </View>
  )
}
