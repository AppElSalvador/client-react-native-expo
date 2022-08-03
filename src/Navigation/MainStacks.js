import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import React from 'react';
import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Load from '../screens/Load';


const Stack= createNativeStackNavigator();

const MainStacks = () => {
    return (
       <NavigationContainer>
        <Stack.Navigator
        initialRouteName='Load'
        screenOptions={
            {headerShown:false}
        }   
        >
       

<Stack.Screen
        name='Load'
        component={Load}
        />

<Stack.Screen
        name='Login'
        component={Login}
        />

            
       

        
        <Stack.Screen
        name='Register'
        component={Register}
        />

<Stack.Screen
        name='Home'
        component={Home}
        
        options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#0C5149',
            },
          
            
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        </Stack.Navigator>
       </NavigationContainer>
    );
};

export default MainStacks;