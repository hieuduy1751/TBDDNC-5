/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, TextInput, TouchableOpacity, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

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
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabTwo"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
        tabBarStyle: {
          backgroundColor: '#1ba9ff',
        },
        headerStyle: {
          backgroundColor: '#1BA9FF',
        },
        headerTitleStyle: {
          color: 'white',
        },
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={TabOneScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Chat',
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color="white" />,
          tabBarShowLabel: false,
          headerLeft: () => (
            <TouchableOpacity>
              <Ionicons
                name="arrow-back-outline"
                size={25}
                color="white"
                style={{ marginLeft: 30 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity>
              <Ionicons
                name="ios-cart-outline"
                size={25}
                color="white"
                style={{ marginRight: 30 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="ios-home-outline" color="white" />
          ),
          tabBarShowLabel: false,
          headerLeft: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: 200,
              }}
            >
              <TouchableOpacity>
                <Ionicons
                  name="arrow-back-outline"
                  size={25}
                  color="white"
                  style={{ marginLeft: 30 }}
                />
              </TouchableOpacity>
              <View
                style={{
                  width: '100%',
                  height: 30,
                  marginLeft: 10,
                  backgroundColor: 'white',
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <Ionicons
                  name="search"
                  size={30}
                  style={{ marginHorizontal: 5 }}
                />
                <TextInput placeholder="Dây cáp usb" style={{ fontSize: 16 }} />
              </View>
            </View>
          ),
          headerRight: () => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: 70,
                marginRight: 30,
              }}
            >
              <TouchableOpacity>
                <Ionicons name="ios-cart-outline" size={25} color="white" />
              </TouchableOpacity>
              <TouchableOpacity>
                <Ionicons
                  name="ellipsis-horizontal-sharp"
                  size={25}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabTwoScreen}
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="return-up-back-sharp" color="white" />
          ),
          tabBarShowLabel: false,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>['name'];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
