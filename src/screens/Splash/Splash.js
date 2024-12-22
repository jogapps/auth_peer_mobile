import React, { useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import AppStatusBar from '../../components/AppStatusBar/AppStatusBar';
import { kAppWhiteColor } from '../../constants/colors';
import { SignupId } from '../Signup/SignUp';

const background = require('../../../assets/images/splash.png');

const SplashPageId = 'SplashPage';
const SplashPage = (props) => {

    useEffect(() => {
        // redirect to intro / login page after 3 seconds depending on which
        setTimeout(() => {
            //props.navigation.navigate(IntroId);
            props.navigation.replace(SignupId);
        }, 3000);
    }, [props.navigation]);

    return (
        <ImageBackground
            source={background}
            style={style.splashBackground}
        >
            <AppStatusBar />
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'baseline',
                    }}>
                    <Text style={style.titleText}>Auth Peer</Text>

                </View>
                <Text style={{ color: kAppWhiteColor, fontSize: 12 }}>Auth Peer Test App</Text>
            </View>
        </ImageBackground>
    );
}

const style = StyleSheet.create({
    splashBackground: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    titleText: {
        color: kAppWhiteColor,
        fontSize: 40,
        fontFamily: 'OpenSans-SemiBold',
        //fontWeight: '500',
    },
});

export default SplashPage;
export { SplashPageId }