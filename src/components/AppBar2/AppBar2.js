// import { Text } from "native-bas";
import React from "react";
import { SafeAreaView, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { kAppDarkGreen, kAppPrimaryColor } from "../../constants/colors";
import AppStatusBar from "../AppStatusBar/AppStatusBar";
import {kAppStatusBarHeight} from "../../constants/sizes";

const AppBar2 = (props) => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={props.press}>
                    <Icon name="ios-chevron-back-outline" color={kAppPrimaryColor} size={30} />
                </TouchableOpacity>
                <Text style={styles.title}>{props.title}</Text>
            </View>
        </View>
    </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 15,
        marginTop: 10 + parseInt(kAppStatusBarHeight),
        marginBottom: 10
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    title: {
        color: kAppPrimaryColor,
        fontSize: 18,
        marginLeft: 20,
        fontFamily: "Montserrat-Bold"
    }
})


export default AppBar2;