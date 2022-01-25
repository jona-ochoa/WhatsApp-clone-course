/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Octicons, MaterialCommunityIcons, FontAwesome, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, View } from 'react-native';
import { Fontisto } from '@expo/vector-icons';


import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import ChatScreen from '../screens/ChatScreen';
import CameraScreen from '../screens/CameraScreen';
import { RootStackParamList, MainTabParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import ContactsScreen from '../screens/ContactsScreen';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.light.tint,
        shadowOpacity: 0,
        elevation: 0,
      },
      headerTintColor: Colors.light.background,
      headerTitleAlign: 'left',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }}>
      <Stack.Screen
        name="Root" 
        component={MainTabNavigator}  
        options={{
          title:"WhatsApp",
          headerRight: () => (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 60, marginRight: 20}}>
              <Octicons name="search" size={22} color="white" />
              <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
            </View>
          )
        }}
      />
       <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({route}) => ({
          title: route.params.name,
          headerRight: () => (
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 100, marginRight: 10}}>
              <FontAwesome5 name='video' size={22} color={'white'} />
              <MaterialIcons name='call' size={22} color={'white'} />
              <MaterialCommunityIcons name='dots-vertical' size={22} color={'white'} />
            </View>
        )
        })}
      />
      <Stack.Screen 
        name="Contacts" 
        component={ContactsScreen}  
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chats"
      tabBarOptions={{
        activeTintColor: Colors[colorScheme].background,
        style:{
          backgroundColor: Colors[colorScheme].tint,
        },
        indicatorStyle:{
            backgroundColor: Colors[colorScheme].background,
            height: 4,
          },
        labelStyle:{
          fontWeight: 'bold',
        },
      }}>
      <MainTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ color}) => <Fontisto name="camera" size={20} color={color} />,
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatScreen}
      />
       <MainTab.Screen
        name="Status"
        component={ChatScreen}
      />
       <MainTab.Screen
        name="Calls"
        component={ChatScreen}
      />
    </MainTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
