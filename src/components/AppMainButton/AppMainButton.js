import React from 'react';
import { Dimensions, View, TouchableOpacity, StyleSheet, Text, ActivityIndicator } from 'react-native';
import { kAppPrimaryColor, kAppWhiteColor } from '../../constants/colors';

const width = Dimensions.get('screen').width;

const AppMainButton = (props) => {
    const buttonStyles = {
        backgroundColor: kAppPrimaryColor,
        borderRadius: 10,
        width: props.width ? width * props.width : width,
        height: 50,
        justifyContent: 'center', // Center vertically
        alignItems: 'center', // Center horizontally
    };

    return !props.loading ? (
        <TouchableOpacity onPress={props.onPress}>
            <View style={buttonStyles}>
                <Text style={styles.buttonText}>{props.text}</Text>
            </View>
        </TouchableOpacity>
    ) : (
        <View style={buttonStyles}>
            <ActivityIndicator size="large" color={kAppWhiteColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        color: kAppWhiteColor,
        fontFamily: 'Montserrat-Bold',
        fontSize: 16, // Adjust size if needed
    },
});

export default AppMainButton;
