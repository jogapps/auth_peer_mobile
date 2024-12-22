import { GestureHandlerRootView } from 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashPage, { SplashPageId } from './src/screens/Splash/Splash';
import SignupPage, { SignupId } from './src/screens/Signup/SignUp';
import SigninPage, { SigninId } from './src/screens/SignIn/SignIn';
import HomeTab, { HomeTabId } from './src/screens/Home/Home';

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={SplashPageId}>
                    <Stack.Screen name={SplashPageId} component={SplashPage} />
                    <Stack.Screen name={SignupId} component={SignupPage} />
                    <Stack.Screen name={SigninId} component={SigninPage} />
                    <Stack.Screen name={HomeTabId} component={HomeTab} />
                </Stack.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}

export default Routes;