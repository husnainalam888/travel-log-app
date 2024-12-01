import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import Colors from '../theme/Colors';
import SignUp from '../screens/SignUp';
import DashboardScreen from '../screens/DashboardScreen';
import Login from '../screens/Login';
import History from '../screens/History';
import {GLOBAL_STORAGE} from '../utils/storage';
import {useMMKVStorage} from 'react-native-mmkv-storage';
const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const [user, setUser] = useMMKVStorage('USER', GLOBAL_STORAGE, {});
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user?.token ? 'dashboard' : 'onBoarding'}
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: Colors.backgroundColor,
          },
        }}>
        <Stack.Screen name="onBoarding" component={OnBoardingScreen} />
        <Stack.Screen name="signUp" component={SignUp} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="dashboard" component={DashboardScreen} />
        <Stack.Screen name="history" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
