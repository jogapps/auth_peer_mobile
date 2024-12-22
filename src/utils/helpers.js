import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert, BackHandler, Linking } from "react-native";
import { SignupId } from "../screens/Signup/SignUp";

export const getStorage = async (item) => {
    let data = await AsyncStorage.getItem(item);//.then((res) => {
    try {
        return JSON.parse(data);
    } catch (e) {
        return data;
    }
}

export const exitAction = async () => {
    await Alert.alert("Exit!", "Are you sure you want to exit?", [
        {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
}

export const backAction = async (props) => {
    await Alert.alert("Exit!", "Are you sure you want to exit?", [
        {
            text: "Cancel",
            onPress: () => null,
            style: "cancel"
        },
        { text: "YES", onPress: () => props.navigation.navigate(SignupId)}
    ]);
    return true;
}

export const onBackButtonPress = (props) => {
    backAction(props);
    return true;
};

export const onExitBackButtonPress = (props) => {
    exitAction(props);
    return true;
};

export const openUrl = (url) => {
    Linking.openURL(url).catch(err => alert("Could not open url"));
};
